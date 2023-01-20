import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index"
import "./index.css";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;