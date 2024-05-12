/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetArticle, actionDeleteArticle } from "../../redux/article/articleThunks";
import {
  getQuerybyArticleId,
  sendQuery,
} from "../../redux/queries/queryThunks";
import "./styles.sass";
const SummaryDisplay = () => {
  const { id } = useParams();
  const [message, setMessage] = useState<string>("");

  const dispatch = useDispatch();
  const { summary } = useSelector((state: any) => state.article);
  const { queries } = useSelector((state: any) => state.query);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Efecto para obtener el artículo
  useEffect(() => {
      if (id) {
          dispatch(actionGetArticle(id));
      }
  }, [dispatch, id]);

  // Efecto para obtener las consultas
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
  };

  const deleteArticle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (id) {
        dispatch(actionDeleteArticle(id));
    }
}
  return (
    <>
      <div className="header">
        <div className="Info">
          <h1>Summary Display</h1>
          <p>Article ID: {id}</p>
        </div>
        <div className="delete">
          <button 
          className="delete_button"
          onClick={deleteArticle}
          >Delete</button>
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
