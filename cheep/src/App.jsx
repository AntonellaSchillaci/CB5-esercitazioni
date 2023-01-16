import Navbar from "./components/navbar/index";
import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messagesList/index";
import Footer from "./components/footer/index";
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <NewMessage />
      <MessagesList />
      <Footer />
    </div>
  );
}

export default App;
