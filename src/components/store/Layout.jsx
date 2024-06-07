
import { Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

// import Loader from "../components/Loader";

const Layout = () => {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <script src="/js/vendor/jquery.js"></script>
          <script src="/js/vendor/waypoints.js"></script>
          <script src="/js/bootstrap-bundle.js"></script>
          <script src="/js/swiper-bundle.js"></script>
          <script src="/js/slick.js"></script>
          <script src="/js/range-slider.js"></script>
          <script src="/js/magnific-popup.js"></script>
          <script src="/js/nice-select.js"></script>
          <script src="/js/purecounter.js"></script>
          <script src="/js/wow.js"></script>
          <script src="/js/isotope-pkgd.js"></script>
          <script src="/js/jarallax.js"></script>
          <script src="/js/imagesloaded-pkgd.js"></script>
          <script src="/js/ajax-form.js"></script>
          <script src="/js/main.js"></script>
        </Helmet>
      </HelmetProvider>
      {/* <Loader /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;