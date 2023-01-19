import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend";
import "./index.css";

const FriendsList = ({setModalContent, setModalEnabled}) => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET("users").then((data) => setFriendsList(data.users));
  }, []);

  return (
    <div className="FriendsList">
      <h3 className="titleFriends">Friends</h3>
      {friendsList.map((friend) => (
        <Friend 
        data={friend}
        setModalContent={setModalContent}
        setModalEnabled={setModalEnabled} 
        key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsList;