import { useState } from "react";
import Navbar from "./components/navbar/index";
import Button from "./components/button";
import NewMessage from "./components/newMessage/index";
import FriendsList from "./components/friendsList/index";
import Filter from "./components/filter/index";
import MessagesList from "./components/messagesList/index";
import Footer from "./components/footer/index";
import Modal from "./components/modal/index"
import FriendContent from "./components/friendContent/index";
import './App.css';



function App() {

  const [filterState, setFilterState] = useState("");
  const [isModalEnabled, setModalEnabled] = useState(false);
  const [modalContent, setModalContent] = useState("NewMessage");

  const onHandleModal = () => {
  setModalEnabled((prev) => !prev);
  setModalContent("NewMessage");
  };

  return (
    <div className="App">
        <Navbar /> 
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
      <Footer />
    </div>
  );
}

export default App;
