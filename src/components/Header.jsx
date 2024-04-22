import { Link } from "react-router-dom"


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
                        <Link to="#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                        <Link to="#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                        <Link to="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                        <Link to="#">
                          <i className="fa-brands fa-twitter" />
                        </Link>
                      </div>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <i className="flaticon-mail-1" />
                      <Link to="mailto:sales@zotex.in">
                        <span className="__cf_email__">sales@zotex.in</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6 d-none d-sm-block">
                <div className="tp-header-top-right-box text-end">
                  <ul>
                    <li>
                      <i className="fa fa-phone" style={{ color: "#f36e21" }} />
                      <Link to="tel:+919887798866">+91 988-779-8866</Link>
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
                  <Link to="/">
                    <img src="assets/img/logo/white-logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 d-none d-xl-block">
                <div className="tp-header-main-menu tp-header-menu-border-2 text-end text-xxl-start">
                  <nav className="tp-main-menu-content">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">about us</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link to="product.html">Products</Link>
                        <ul className="submenu tp-submenu">
                          <li>
                            <Link to="CCTV-camera.html">CCTV Camera</Link>
                          </li>
                          <li>
                            <Link to="CCTV-cables.html">CCTV Cables</Link>
                          </li>
                          <li>
                            <Link to="CCTV-rack.html">CCTV Rack</Link>
                          </li>
                          <li>
                            <Link to="CCTV-accessories.html">CCTV Accessories</Link>
                          </li>
                          <li>
                            <Link to="cat-6-cables.html">Cat-6 Cables</Link>
                          </li>
                          <li>
                            <Link to="surge-protector.html">Surge Protector</Link>
                          </li>
                          <li>
                            <Link to="HDMI-cables.html">HDMI Cables</Link>
                          </li>
                          <li>
                            <Link to="power-cables.html">Power Cables</Link>
                          </li>
                          <li>
                            <Link to="usb-extension-cables.html">
                              USB Extension Cables
                            </Link>
                          </li>
                          <li>
                            <Link to="usb-printer-cables.html">
                              USB Printer Cables
                            </Link>
                          </li>
                          <li>
                            <Link to="extenders-and-splitters.html">
                              Extenders and Splitters
                            </Link>
                          </li>
                          <li>
                            <Link to="other-accessories.html">Other Accessories</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
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