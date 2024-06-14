import { useEffect } from "react";
import { useProduct } from "../stores/product.store";

const Product = () => {
  const { getAllProducts, productList } = useProduct(
    (state) => state
  );
  useEffect(() => {
    getAllProducts();
  }, [])

  return (
    <main>
      <div className="breadcrumb__area breadcrumb__overlay breadcrumb__height p-relative fix" data-background="img/breadcurmb/breadcurmb.jpg">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content z-index d-flex justify-content-between align-items-end">
                <div className="breadcrumb__section-title-box">
                  <h3 className="breadcrumb__title">Zotex Product</h3>
                </div>
                <div className="breadcrumb__list">
                  <span><a href="index.html">Home</a></span>
                  <span className="dvdr"><i>/</i></span>
                  <span>Product</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-product__area pt-100 pb-120">
        <div className="container">
          <div className="row ">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-shop-sidebar mr-10">
                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Categories</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-categories">
                      <ul>
                        <li><a href="/product" className="active">All Product</a></li>
                        <li><a href="CCTV-camera.html">CCTV Camera</a></li>
                        <li><a href="CCTV-cables.html">CCTV Cables</a></li>
                        <li><a href="CCTV-rack.html">CCTV Rack</a></li>
                        <li><a href="CCTV-accessories.html">CCTV Accessories</a></li>
                        <li><a href="cat-6-cables.html">Cat-6 Cables</a></li>
                        <li><a href="surge-protector.html">Surge Protector</a></li>
                        <li><a href="HDMI-cables.html">HDMI Cables</a></li>
                        <li><a href="power-cables.html">Power Cables</a></li>
                        <li><a href="usb-extension-cables.html">USB Extension Cables</a></li>
                        <li><a href="usb-printer-cables.html">USB Printer Cables</a></li>
                        <li><a href="extenders-and-splitters.html">Extenders and Splitters</a></li>
                        <li><a href="other-accessories.html">Other Accessories</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="grid md:grid-cols-2 gap-4">
                {
                  productList?.length > 0 ? (
                    productList.map((el) => (
                      <div key={el.id} className="tp-product-item-2 ">
                        <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
                          <a href="/product-details">
                            {el?.images?.length > 0 && (
                              <img
                                src={`${import.meta.env.VITE_API_BASE_URL}image/${el?.images[0]}`}
                                className=""
                              />
                            )}
                          </a>
                          <div className="tp-product-action-2 tp-product-action-blackStyle">
                            <div className="tp-product-action-item-2 d-flex flex-column">
                              <button type="button" className="tp-product-action-btn-2 tp-product-quick-view-btn">
                                <a href="/product-details">
                                  <i className="fa-solid fa-eye" />
                                  <span className="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
                                </a>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="tp-product-content-2 pt-15">
                          <h3 className="tp-product-title-2">
                            <a href="/product-details">{el.name}</a>
                          </h3>
                          <div className="tp-product-tag-2">
                            <a href="#">{el.description}</a>
                          </div>
                          <div className="tp-product-rating-icon">
                            <span><i className="fa-solid fa-star" /></span>
                            <span><i className="fa-solid fa-star" /></span>
                            <span><i className="fa-solid fa-star" /></span>
                            <span><i className="fa-solid fa-star" /></span>
                            <span><i className="fa-solid fa-star" /></span>
                          </div>
                          <div className="tp-product-price-wrapper-2">
                            <span className="tp-product-price-2 new-price">₹ {el.price.mrp}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product;