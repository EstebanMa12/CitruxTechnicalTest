/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, FormEvent } from "react";
import "./styles.sass";
import axios from "axios";

interface ChatMessage {
  role: string;
  content: string;
}

const QuestionAsker: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const chat = async (e: FormEvent<HTMLFormElement>, message: string) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);
    window.scrollTo(0, document.body.scrollHeight);

    const msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");

    fetch("http://localhost:4000/api/v1/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push(data.output);
        setChats(msgs);
        setIsTyping(false);
        window.scrollTo(0, document.body.scrollHeight);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="Question_container">
      <h1>Summarizer Assistant</h1>

      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                <span>
                  <b>{chat.role.toUpperCase()}</b>
                </span>
                <span>:</span>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </section>

      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>

      <form action="" onSubmit={(e) => chat(e, message)}>
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
