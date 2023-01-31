import { Outlet } from "react-router-dom";
import Footer from "./../../components/footer/index"
import styles from "./index.module.scss";

const MainLayout = ( ) => {
  return (
    <>
        <div className={styles.MainLayout}>
            <Footer />
        </div>
        <Outlet />
    </>
  );
};

export default MainLayout;