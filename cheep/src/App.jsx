import Navbar from "./components/navbar/index";
import NewMessage from "./components/newMessage/index";
import FriendsList from "./components/friendsList/index";
import MessagesList from "./components/messagesList/index";
// import PopularPostList from "./components/popularPostsList/index";
import Footer from "./components/footer/index";
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sectionHome">
        <FriendsList />
        <div className="sectionMessage">
          <NewMessage />
          <MessagesList />
        </div>
        {/* <PopularPostList /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
