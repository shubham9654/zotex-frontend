

const Header = () => {
  return (
    <header>
      <div className="tp-header-transparent">
        <div className="tp-header-top-area tp-header-top-wrap tp-header-top-space p-relative black-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-8 col-md-8 col-sm-6">
                <div className="tp-header-top-left-box text-center text-md-start">
                  <ul>
                    <li>
                      <div className="tp-header-top-right-social">
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </div>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <i className="flaticon-mail-1" />
                      <a href="mailto:sales@zotex.in">
                        <span className="__cf_email__">sales@zotex.in</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6 d-none d-sm-block">
                <div className="tp-header-top-right-box text-end">
                  <ul>
                    <li>
                      <i className="fa fa-phone" style={{ color: "#f36e21" }} />
                      <a href="tel:+919887798866">+91 988-779-8866</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="tp-header-area tp-header-style-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4 col-md-4 col-6">
                <div className="tp-header-logo">
                  <a href="index.html">
                    <img src="assets/img/logo/white-logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 d-none d-xl-block">
                <div className="tp-header-main-menu tp-header-menu-border-2 text-end text-xxl-start">
                  <nav className="tp-main-menu-content">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about-us.html">about us</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="product.html">Products</a>
                        <ul className="submenu tp-submenu">
                          <li>
                            <a href="CCTV-camera.html">CCTV Camera</a>
                          </li>
                          <li>
                            <a href="CCTV-cables.html">CCTV Cables</a>
                          </li>
                          <li>
                            <a href="CCTV-rack.html">CCTV Rack</a>
                          </li>
                          <li>
                            <a href="CCTV-accessories.html">CCTV Accessories</a>
                          </li>
                          <li>
                            <a href="cat-6-cables.html">Cat-6 Cables</a>
                          </li>
                          <li>
                            <a href="surge-protector.html">Surge Protector</a>
                          </li>
                          <li>
                            <a href="HDMI-cables.html">HDMI Cables</a>
                          </li>
                          <li>
                            <a href="power-cables.html">Power Cables</a>
                          </li>
                          <li>
                            <a href="usb-extension-cables.html">
                              USB Extension Cables
                            </a>
                          </li>
                          <li>
                            <a href="usb-printer-cables.html">
                              USB Printer Cables
                            </a>
                          </li>
                          <li>
                            <a href="extenders-and-splitters.html">
                              Extenders and Splitters
                            </a>
                          </li>
                          <li>
                            <a href="other-accessories.html">Other Accessories</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-8 col-md-8 col-6">
                <div className="tp-header-right-box">
                  <div className="tp-header-right-action d-flex align-items-center justify-content-end">
                    <div className="tp-header-bar d-xl-none">
                      <button className="tp-menu-bar">
                        <i className="fa-sharp fa-regular fa-bars-staggered" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header