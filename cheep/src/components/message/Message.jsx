import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const Message = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, [data.userId]);

  return (
    <div className="Message">
      <img src={user.image} alt={user.firstName} />
      <div className="text">
        <p className="name">@{user.firstName}</p>
        <h4 className="title">{data.title}</h4>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default Message;