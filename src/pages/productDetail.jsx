

const ProductDetail = () => {
  return (
    <main>
      <div className="breadcrumb__area breadcrumb__overlay breadcrumb__height p-relative fix" data-background="assets/img/breadcurmb/breadcurmb.jpg">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content z-index d-flex justify-content-between align-items-end">
                <div className="breadcrumb__section-title-box">
                  <h3 className="breadcrumb__title">Product Details</h3>
                </div>
                <div className="breadcrumb__list">
                  <span><a href="index.html">Home</a></span>
                  <span className="dvdr"><i>/</i></span>
                  <span>Product Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-product-details-area pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-shop-details__wrapper">
                <div className="tp-shop-details__tab-content-box mb-20">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab">
                      <div className="tp-shop-details__tab-big-img">
                        <img src="assets/img/products/product-img-02.jpg" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab">
                      <div className="tp-shop-details__tab-big-img">
                        <img src="assets/img/products/product-img-03.jpg" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-three" role="tabpanel" aria-labelledby="nav-three-tab">
                      <div className="tp-shop-details__tab-big-img">
                        <img src="assets/img/products/product-img-04.jpg" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab">
                      <div className="tp-shop-details__tab-big-img">
                        <img src="assets/img/products/product-img-05.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tp-shop-details__tab-btn-box">
                  <nav>
                    <div className="nav nav-tab" id="nav-tab" role="tablist">
                      <button className="nav-links active" id="nav-one-tab" data-bs-toggle="tab" data-bs-target="#nav-one" type="button" role="tab" aria-controls="nav-one" aria-selected="true">
                        <img src="assets/img/products/product-img-02.jpg" alt="" />
                      </button>
                      <button className="nav-links" id="nav-two-tab" data-bs-toggle="tab" data-bs-target="#nav-two" type="button" role="tab" aria-controls="nav-two" aria-selected="false">
                        <img src="assets/img/products/product-img-03.jpg" alt="" />
                      </button>
                      <button className="nav-links" id="nav-three-tab" data-bs-toggle="tab" data-bs-target="#nav-three" type="button" role="tab" aria-controls="nav-three" aria-selected="false">
                        <img src="assets/img/products/product-img-04.jpg" alt="" />
                      </button>
                      <button className="nav-links" id="nav-four-tab" data-bs-toggle="tab" data-bs-target="#nav-four" type="button" role="tab" aria-controls="nav-four" aria-selected="false">
                        <img src="assets/img/products/product-img-05.jpg" alt="" />
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-shop-details__right-warp">
                <h3 className="tp-shop-details__title-sm">Bullet Camera</h3>
                <div className="tp-shop-details__text-2">
                  <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
                {/* <div class="tp-shop-details__price">
                             <span>$230.00</span>
                             <del>$32.00</del>
                         </div> */}
                <div className="tp-shop-details__product-info">
                  <ul>
                    <li><span>Model No. :- </span>ZT-IPB04C</li>
                    <li><span>Details :- </span>4MP Resolutions / Day and Night Color Led / Audio in Build / 3.6 MM Lens / Metallic Body / Support all 4G / 5G Sim </li>
                  </ul>
                </div>
                <div className="tp-shop-details__ratting">
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                  <span><i className="fa-solid fa-star" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail