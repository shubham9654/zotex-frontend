
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
          <script src="/assets/js/vendor/jquery.js"></script>
          <script src="/assets/js/vendor/waypoints.js"></script>
          <script src="/assets/js/bootstrap-bundle.js"></script>
          <script src="/assets/js/swiper-bundle.js"></script>
          <script src="/assets/js/slick.js"></script>
          <script src="/assets/js/range-slider.js"></script>
          <script src="/assets/js/magnific-popup.js"></script>
          <script src="/assets/js/nice-select.js"></script>
          <script src="/assets/js/purecounter.js"></script>
          <script src="/assets/js/wow.js"></script>
          <script src="/assets/js/isotope-pkgd.js"></script>
          <script src="/assets/js/jarallax.js"></script>
          <script src="/assets/js/imagesloaded-pkgd.js"></script>
          <script src="/assets/js/ajax-form.js"></script>
          <script src="/assets/js/main.js"></script>
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