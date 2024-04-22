
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import Drawer from "../components/Drawer";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      
      <Loader />
      <Drawer />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;