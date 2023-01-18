import { useState } from "react";
import Navbar from "./components/navbar/index";
import Button from "./components/button";
import NewMessage from "./components/newMessage/index";
import FriendsList from "./components/friendsList/index";
import Filter from "./components/filter/index";
import MessagesList from "./components/messagesList/index";
import Footer from "./components/footer/index";
import Modal from "./components/modal/index"
import './App.css';



function App() {

  const [filterState, setFilterState] = useState("");
  const [isModalEnabled, setModalEnabled] = useState(false);

  const onHandleModal = () => setModalEnabled((prev) => !prev);

  return (
    <div className="App">
        <Navbar /> 
      <div className="sectionHome">
        <FriendsList />
        <div className="sectionMessage">
          {isModalEnabled && (
            <Modal>
              <NewMessage />
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
          <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
        </div>
      <Footer />
    </div>
  );
}

export default App;
