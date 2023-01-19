import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const FriendContent = ({ friendId }) => {
  const [friendData, setFriendData] = useState({});

  useEffect(() => {
    GET(`users/${friendId}`).then((friend) => setFriendData(friend));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { image, username, firstName, lastName, age, address } = friendData;

  return (
    <div className="FriendContent">
        <img src={image} alt={username} />
        <div className="nameText">
            <h3 className="nameModal">{`${firstName} ${lastName}`}</h3>
            <h5 className="username">@{username}</h5>
        </div>
        <h5 className="age">age: {age}</h5>
        <p className="address">{`${address?.city} ( ${address?.state} )`}</p>
    </div>
  );
};

export default FriendContent;