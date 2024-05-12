/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetArticle } from "../../redux/article/articleThunks";
import { getQuerybyArticleId, sendQuery } from "../../redux/queries/queryThunks";
import './styles.sass'
const SummaryDisplay = () => {
  const { id } = useParams();
  const [message, setMessage] = useState<string>("");

  const dispatch = useDispatch();
  const { summary } = useSelector((state: any) => state.article);
  const { queries } = useSelector((state: any) => state.query);

  useEffect(() => {
    dispatch(actionGetArticle(id ?? ""));
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
  };

  return (
    <>
      <h1>Summary Display</h1>
      <p>Article ID: {id}</p>
      <p>{summary}</p>
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
      <form className = "form_container"
      action="" onSubmit={submit}>
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
