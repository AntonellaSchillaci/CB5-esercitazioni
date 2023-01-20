import { useState, useEffect } from "react";
import Button from "./components/button";
import NewMessage from "./components/newMessage/index";
import FriendsList from "./components/friendsList/index";
import Filter from "./components/filter/index";
import MessagesList from "./components/messagesList/index";
import Modal from "./components/modal/index"
import FriendContent from "./components/friendContent/index";
import Login from "./components/login/index";
import './App.css';



function App() {

  const [user, setUser] = useState();
  const [filterState, setFilterState] = useState("");
  const [isModalEnabled, setModalEnabled] = useState(false);
  const [modalContent, setModalContent] = useState("NewMessage");

  const onHandleModal = () => {
  setModalEnabled((prev) => !prev);
  setModalContent("NewMessage");
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUser(JSON.parse(localStorage.getItem("username")).username);
    }
  }, []);

  return  user ? (
    <div className="App">
      <div className="sectionHome">
        <FriendsList 
          setModalContent={setModalContent}
          setModalEnabled={setModalEnabled}
        />
        <div className="sectionMessage">
          {isModalEnabled && (
            <Modal setModalEnabled={setModalEnabled}>
              {modalContent === "NewMessage" ? (
                <NewMessage setModalEnabled={setModalEnabled} />
              ) : (
                <FriendContent friendId={modalContent}/>
              )}
            </Modal>
          )}
          <Filter setFilterState = {setFilterState} />
          <MessagesList nPost={"full"} filterSearch={filterState}/>
        </div>
        <div className="sectionPopular">
          <h3 className="titlePopular">Most Popular</h3>
          <MessagesList nPost={10} /> 
        </div>
      </div>
      <div className="positionButton">
          <Button 
            isModalEnabled={isModalEnabled} 
            func={onHandleModal} />
      </div>
    </div>
  ) : (<Login/>);
}

export default App;
