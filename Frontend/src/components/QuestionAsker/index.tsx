/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuerybyArticleId,
  sendQuery,
} from "../../redux/queries/queryThunks";

import "./styles.sass";

// interface ChatMessage {
//   role: string;
//   content: string;
// }

const QuestionAsker: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  // const [chats, setChats] = useState<ChatMessage[]>([]);
  // const [isTyping, setIsTyping] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { loading, error, queries } = useSelector((state: any) => state.query);
  const { _id: articleIdProp } = useSelector((state: any) => state.article);

  useEffect(() => {
    const fetchQuery = async () => {
      if(queries && articleIdProp){
        await dispatch(getQuerybyArticleId(articleIdProp));
      }
    }

    fetchQuery();
  }, [queries, dispatch, articleIdProp]);

  const submit = (event: any) => {
    event.preventDefault();
    dispatch(
      sendQuery(
        {
          role: "user",
          content: message,
        },
        articleIdProp
      )
    );
  };

  // const makeQuery = async (message: any) => {
  // try{  axios
  //     .post("http://localhost:4000/api/v1/query", {
  //       userQuestions: [
  //         {
  //           role: "user",
  //           content: message,
  //         },
  //       ],
  //     })
  //   }catch(error){

  //   }

  // };

  // const chat = async (e: FormEvent<HTMLFormElement>, message: string) => {
  //   e.preventDefault();

  //   if (!message) return;
  //   setIsTyping(true);
  //   window.scrollTo(0, document.body.scrollHeight);

  //   const msgs = chats;
  //   msgs.push({ role: "user", content: message });
  //   setChats(msgs);

  //   setMessage("");

  // };

  return (
    <main className="Question_container">
      <h1>Summarizer Assistant</h1>

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
                    <b>{chat.userQuestion.role.toUpperCase()}</b>
                  </span>
                  <span>:</span>
                  <span>{chat.userQuestion.content}</span>
                </p>
                <p>
                  {/* <p className={chat.aiResponse.role === "assistant" ? "assistant_msg" : ""}> */}
                  <span>:</span>
                  <span>{chat.aiResponse.content}</span>
                </p>
              </section>
            ))
          : ""}
      </section>

      {/* <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div> */}

      <form action="" onSubmit={submit}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </main>
  );
};

export default QuestionAsker;
