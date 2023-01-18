import { useState } from "react";
import "./index.css";

const NewMessage = () => {
  const [inputAddTitle, setInputAddTitle] = useState("");
  const [inputAddName, setInputAddName] = useState("");
  const [inputAddDescription, setInputAddDescription] = useState("");
  const [inputAddImg, setInputAddImg] = useState("");


  const onHandleAddValue = (e) => {
    e.preventDefault();

    console.log(inputAddName);
    console.log(inputAddTitle);
    console.log(inputAddDescription);

    
    // setPosts(prev => [ {post: inputAddValue },...prev] );
  };

  return (
    <div className="NewMessage">
      <div className="sectionNewMessage">
        <form onSubmit={onHandleAddValue}>
          <div className="sectionInputImg">
            <p className="imgText">Carica immagine del profilo</p>
            <input
              className="inputImg"
              type="file"
              multiple accept="image/*"
              value={inputAddImg}
              onChange={(e) => setInputAddImg(e.target.value)}
            />
          </div>
          <div className="sectionInput">
            <input
              type="text"
              value={inputAddName}
              onChange={(e) => setInputAddName(e.target.value)}
              placeholder="Name"
            />
            
            <input
              type="text"
              value={inputAddTitle}
              onChange={(e) => setInputAddTitle(e.target.value)}
              placeholder="Title"
            />

            <input
              type="text"
              value={inputAddDescription}
              onChange={(e) => setInputAddDescription(e.target.value)}
              placeholder="What are you thinking about?"
            />
            <input className="button" type="submit" value="Send" />  
           </div>
        </form>
       
      </div>
    </div>
  );
};

export default NewMessage;