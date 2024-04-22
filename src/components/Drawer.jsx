

const Drawer = () => {
  return (
    <div>
      <div className="back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg
            width={12}
            height={7}
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6L6 1L1 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="tpoffcanvas-area">
        <div className="tpoffcanvas">
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn">
              <i className="fal fa-times" />
            </button>
          </div>
          <div className="tpoffcanvas__logo">
            <a href="index.html">
              <img src="assets/img/logo/white-logo.png" alt="" />
            </a>
          </div>
          <div className="tp-main-menu-mobile d-xl-none" />
          <div className="tpoffcanvas__social">
            <div className="social-icon">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay" />
    </div>
  )
}

export default Drawer