
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// import Loader from "../components/Loader";

const Layout = () => {

  return (
    <>
      {/* <Loader /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;