import React, { FormEvent, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import initSocket from "../../api/Chat/chat";
import { useUser } from "../../contexts/UserContext";
import useChatScroll from "../../hooks/useChatScroll";
import { Chat } from "../../types";
import ChatMessage from "./ChatMessage";

const ChatList = () => {
  const [socket, setSocket] = useState<Socket>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [chats, setChats] = useState<Chat[]>([]);
  const [inputValues, setInputValues] = useState({
    email: "",
    type: "user",
    message: "",
  });
  const { user } = useUser();

  useEffect(() => {
    setSocket(initSocket());
    setIsLoading(false);
    if (user?.admin) {
      setInputValues({ ...inputValues, email: user.email, type:"system" });
    }
    else if(user && !user.admin) {
      setInputValues({...inputValues, email: user.email})
    }
  }, []);

  const ref = useChatScroll(chats);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  socket.on("init", (data) => setChats(data));
  socket.on("update", (data) => setChats(data));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    socket.emit("new_message", inputValues);
    setInputValues({...inputValues, message: ''})
  };
  return (
    <div>
      <h1 style={{ margin: "1rem", fontSize: "2.5rem" }}>contact us</h1>
      <div className="chatContainer">
        <div className="messagesContainer" ref={ref}>
          {chats?.map((chat) => {
            return <ChatMessage key={chat._id} message={chat.message} type={chat.type} />;
          })}
        </div>
        <form onSubmit={handleSubmit} className="chatForm">
          <input
            type="email"
            className="chat-input"
            placeholder="Email"
            value={inputValues.email}
            onChange={(evt) =>
              setInputValues({ ...inputValues, email: evt.target.value })
            }
          />
          <input
            type="text"
            className="chat-input"
            placeholder="Message"
            value={inputValues.message}
            onChange={(evt) =>
              setInputValues({ ...inputValues, message: evt.target.value })
            }
          />
          <input type="submit" value="Send" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default ChatList;
