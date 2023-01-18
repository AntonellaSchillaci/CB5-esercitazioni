import { useState,  useEffect } from "react";
import { GET } from "../../utils/http";
import Message from "../message";
import "./index.css";

const MessagesList = ({ nPost, filterSearch }) => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) =>
      nPost === "full"
        ? setMsgList(posts.filter((post) => post.title.includes(filterSearch)))
        : setMsgList(posts.filter((post) => post.id <= nPost))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterSearch]);
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