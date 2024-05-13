/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionGetArticle,
  actionDeleteArticle,
} from "../../redux/article/articleThunks";
import {
  getQuerybyArticleId,
  sendQuery,
} from "../../redux/queries/queryThunks";
import { useNavigate } from "react-router-dom";
import "./styles.sass";

import Swal from 'sweetalert2'

const SummaryDisplay = () => {
  const { id } = useParams();
  const [message, setMessage] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { summary } = useSelector((state: any) => state.article);
  const { queries } = useSelector((state: any) => state.query);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (id) {
      dispatch(actionGetArticle(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (queries && id) {
      dispatch(getQuerybyArticleId(id));
    }
  }, [dispatch, id, queries]);

  const submit = (event: any) => {
    event.preventDefault();
    dispatch(
      sendQuery(
        {
          role: "user",
          content: message,
        },
        id ?? ""
      )
    );
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  const deleteArticle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed && id ) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        dispatch(actionDeleteArticle(id));
      }
    });
    navigate("/");
  };
  return (
    <>
      <div className="header">
        <div className="Info">
          <h1>Summary Display</h1>
          <p>Article ID: {id}</p>
        </div>
        <div className="delete">
          <button className="delete_button" onClick={deleteArticle}>
            Delete
          </button>
        </div>
      </div>
      <div ref={chatContainerRef} className="chat_container">
        <p className="summary_container">{summary}</p>
        <section>
          {queries && queries.length
            ? queries.map((chat: any, index: string | number) => (
                <section key={index}>
                  <p
                    className={
                      chat.userQuestion.role === "user" ? "user_msg" : ""
                    }
                  >
                    <span>
                      <b>{chat.userQuestion.role}</b>
                    </span>
                    <span>: </span>
                    <span>{chat.userQuestion.content}</span>
                  </p>
                  <p
                    className={
                      chat.aiResponse.role === "CitruxSystem"
                        ? "assistant_msg"
                        : ""
                    }
                  >
                    <span>
                      <b>{chat.aiResponse.role}</b>
                    </span>
                    <span>: </span>
                    <span>{chat.aiResponse.content}</span>
                  </p>
                </section>
              ))
            : ""}
        </section>
      </div>
      <form className="form_container" action="" onSubmit={submit}>
        <input
          className="input_field"
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </>
  );
};

export default SummaryDisplay;
