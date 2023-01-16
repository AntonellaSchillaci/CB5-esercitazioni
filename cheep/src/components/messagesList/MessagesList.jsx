import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Message from "../message";
import "./index.css";

const MessagesList = () => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) => setMsgList(posts));
  }, []);

  return (
    <div className="MessagesList">
      <div className="list">
        {msgList.map((msg) => (
          <Message data={msg} key={msg.id} />
        ))}
      </div>
    </div>
  );
};

export default MessagesList;