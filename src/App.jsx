
import { Helmet } from 'react-helmet'

import './App.css'
import Home from './pages/home'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Drawer from './components/Drawer'


function App() {

  return (
    <>
      <Helmet>
        <script src="/public/assets/js/vendor/jquery.js"></script>
        <script src="/public/assets/js/vendor/waypoints.js"></script>
        <script src="/public/assets/js/bootstrap-bundle.js"></script>
        <script src="/public/assets/js/swiper-bundle.js"></script>
        <script src="/public/assets/js/slick.js"></script>
        <script src="/public/assets/js/range-slider.js"></script>
        <script src="/public/assets/js/magnific-popup.js"></script>
        <script src="/public/assets/js/nice-select.js"></script>
        <script src="/public/assets/js/purecounter.js"></script>
        <script src="/public/assets/js/wow.js"></script>
        <script src="/public/assets/js/isotope-pkgd.js"></script>
        <script src="/public/assets/js/jarallax.js"></script>
        <script src="/public/assets/js/imagesloaded-pkgd.js"></script>
        <script src="/public/assets/js/ajax-form.js"></script>
        <script src="/public/assets/js/main.js"></script>
      </Helmet>
      <Loader />
      <Drawer />
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
