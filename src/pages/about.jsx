import { Helmet } from "react-helmet"


const About = () => {
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
      <main>
        <div className="breadcrumb__area breadcrumb__overlay breadcrumb__height p-relative fix" data-background="assets/img/breadcurmb/breadcurmb.jpg">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="breadcrumb__content z-index d-flex justify-content-between align-items-end">
                  <div className="breadcrumb__section-title-box">
                    <h3 className="breadcrumb__title">About us</h3>
                  </div>
                  <div className="breadcrumb__list">
                    <span><a href="/">Home</a></span>
                    <span className="dvdr"><i>/</i></span>
                    <span>About us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-about-area p-relative pt-120 pb-120 black-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="tp-about-right-box tp-about-right-wrap text-end p-relative">
                  <div className="tp-about-2-thumb-text text-start d-none d-lg-block" data-background="assets/img/about/bg-2.jpg">
                    <h6><i className="purecounter" data-purecounter-duration={1} data-purecounter-end={35}>0</i>+</h6>
                    <span>Years of experience</span>
                  </div>
                  <div className="tp-about-main-thumb">
                    <img src="assets/img/about/thumb-3-2.jpg" alt="" />
                  </div>
                  <div className="tp-about-thumb-sm">
                    <img src="assets/img/about/thumb-3-1.jpg" alt="" />
                  </div>
                  <div className="tp-about-shape-2  d-none d-lg-block">
                    <img src="assets/img/about/shape-1-3.png" alt="" />
                  </div>
                  <div className="tp-about-shape-6 d-none d-xl-block">
                    <img src="assets/img/about/shape-3-2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                <div className="tp-about-left-box tp-about-ml">
                  <div className="tp-about-section-box mb-15">
                    <span className="tp-section-subtitle"><span></span> WE ARE ZOTEX</span>
                    <h4 className="tp-section-title text-white">Welcome to Zotex</h4>
                  </div>
                  <div className="tp-about-text">
                    <p>Welcome to Zotex, where innovation meets security. As your premier destination for cutting-edge surveillance solutions and IT accessories, we are committed to delivering excellence in every product we offer. At Zotex, our mission is simple: to provide you with the highest quality products and services to meet all your security needs.</p>
                    <p>With years of experience and expertise in the industry, Zotex has established itself as a trusted provider of top-quality surveillance solutions and IT accessories. Whether youre safeguarding your home, office, or business premises, you can rely on Zotex to provide you with the latest technology and innovative solutions to keep you safe and secure.</p>
                    <p>Our dedicated team of professionals is passionate about what they do, and they work tirelessly to ensure that every product we offer meets the highest standards of quality and reliability. From CCTV cameras and security systems to IT accessories such as USB hubs and HDMI cables, we have everything you need to protect your assets and stay connected.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                <div className="tp-about-left-box tp-about-ml">
                  <div className="tp-about-text">
                    <p>At Zotex, we understand that security is a top priority for our customers, which is why we go above and beyond to exceed your expectations. With our unparalleled commitment to excellence and customer satisfaction, Zotex is your trusted partner in security solutions.</p>
                    <p>Thank you for choosing Zotex. We look forward to serving you and helping you protect what matters most.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About