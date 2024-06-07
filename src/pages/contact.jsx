


const Contact = () => {
  return (
    <>
      <main>
        <div className="breadcrumb__area breadcrumb__overlay breadcrumb__height p-relative fix" data-background="img/breadcurmb/breadcurmb.jpg">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="breadcrumb__content z-index d-flex justify-content-between align-items-end">
                  <div className="breadcrumb__section-title-box">
                    <h3 className="breadcrumb__title">Contact us</h3>
                  </div>
                  <div className="breadcrumb__list">
                    <span><a href="/">Home</a></span>
                    <span className="dvdr"><i>/</i></span>
                    <span>Contact us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-contact-3-area pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div className="tp-contact-3-item text-center">
                  <div className="tp-contact-3-icon">
                    <span><img className="z-index" src="img/contact/icon-1.png" alt="" /></span>
                  </div>
                  <div className="tp-contact-3-text">
                    <h5 className="tp-contact-3-title">Visit our place</h5>
                    <a href="#">H.O. C-82, Star Mension, Second floot, Shyam Marg, Shashtri Nagar, Jaipur Rajasthan</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="tp-contact-3-item text-center">
                  <div className="tp-contact-3-icon">
                    <span><img className="z-index" src="img/contact/icon-2.png" alt="" /></span>
                  </div>
                  <div className="tp-contact-3-text">
                    <h5 className="tp-contact-3-title">Contact us</h5>
                    <a href="mailto:sales@zotex.in"><span className="__cf_email__">sales@zotex.in</span></a> <br />
                    <a href="tel:+919887798866">+91 988-779-8866</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                <div className="tp-contact-3-item text-center">
                  <div className="tp-contact-3-icon">
                    <span><img className="z-index" src="img/contact/icon-3.png" alt="" /></span>
                  </div>
                  <div className="tp-contact-3-text">
                    <h5 className="tp-contact-3-title">Office time</h5>
                    <a href="#">Monday to Sturday 10:00 AM -  8:00 PM <br />
                      Sunaday is closed</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-contact-form-area pb-130">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-contact-form-border">
                  <h4 className="tp-contact-form-title">Send your message</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-20">
                        <div className="tp-contact-form-input-box">
                          <input type="text" placeholder="Enter your name" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg- col-md-6 col-12 mb-20">
                        <div className="tp-contact-form-input-box">
                          <input type="text" placeholder="Enter your email" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-20">
                        <div className="tp-contact-form-input-box">
                          <input type="text" placeholder="Your website" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-20">
                        <div className="tp-contact-form-input-box">
                          <input type="text" placeholder="Your subject" />
                        </div>
                      </div>
                      <div className="col-12 mb-20">
                        <div className="tp-contact-form-input-box">
                          <textarea placeholder="Write your message" defaultValue={""} />
                        </div>
                      </div>
                    </div>
                  </form>
                  <button type="submit" className="tp-btn"><span>SEND message</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-map-area">
          <div className="tp-map__item">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.986095385006!2d75.79482487523711!3d26.9356552766335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e5c5bf9a45%3A0x9271dac33a11230a!2sShyam%20Marg%2C%20Shastri%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302032!5e0!3m2!1sen!2sin!4v1713593477088!5m2!1sen!2sin" width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact