import { faArrowRight, faArrowRightLong, faBagShopping, faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popular_Categories from '../AllJsonData/Popular_Categories.json'
import Popular_Products from '../AllJsonData/Popular_Products.json'
import Featured_Products from '../AllJsonData/Featured_Products.json'
import Latest_News from '../AllJsonData/Latest_News.json'
import Client_Testimonials from '../AllJsonData/Client_Testimonials.json'
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";
import { useWishlist } from "./Context/WishlistContext"; // Import Wishlist Context
import "bootstrap/dist/js/bootstrap.bundle.min.js";



function Home() {

    const { wishlist, toggleWishlist } = useWishlist();
    const [visibleProducts, setVisibleProducts] = useState(10);
    const [activeProduct, setActiveProduct] = useState(null);
    const [factivieProduct, setFactiveProduct] = useState(null);
    const [sactivieProduct, setSactiveProduct] = useState(null);

    const [showAllt, setShowAllt] = useState(false);
    const [showAlltt, setShowAlltt] = useState(false);
    const [modelData, setModelData] = useState({});
    const [selectedmodelImage, setSelectedModelImage] = useState({});

    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 10);
    };

    const openModel = (item)=>{
        setModelData(item);
        setSelectedModelImage(item.variants[0])
        const myModal = new bootstrap.Modal(document.getElementById("quickViewModal"));
        myModal.show();
    }
    // const displayedProducts = showAll ? Popular_Categories : Popular_Categories.slice(0, 12);
    const displayedProductst = showAllt ? Popular_Products : Popular_Products.slice(0, 10);
    const displayedProductstt = showAlltt ? Featured_Products : Featured_Products.slice(0, 5);

    return (
        <>
            <div className="container text-center mt-md-5 mt-3">
                <div className="row">
                    <div className="col-md-8 col-sm-12 mt-sm-4  home-img" >
                        <img src="./Img/Bannar Big.png" alt="" />
                    </div>
                    <div className="col-md-4 col-sm-12 d-sm-none d-md-block  home-s-img">
                        <img src="./Img/Bannar.png" alt=""  className="mt-4 mt-md-4 mt-sm-0"/>
                        <img src="./Img/Bannar (1).png" className="mt-4" alt="" />
                    </div>

                    <div className="col-md-12 home-buttom-img">
                        <img src="./Img/Featured.png" alt="" />
                    </div>


                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-7 col-8 text-align-start">
                        <h2 className="d-flex text-start">Popular Categories</h2>
                    </div>
                    <div className="col-md-4 offset-md-4 col-sm-5 col-4 d-flex align-items-center justify-content-end last-col-gap"> 
                        <span className="">
                            <Link to="/BlogPage">
                            View All </Link> </span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                   
                </div>


                <div className="row">
                    {Popular_Categories.map((element) => (
                        <div className={`col-md-2 col-sm-4 col-6 mt-3 main_popular_categories ${factivieProduct === element.id ? "active" : ""}`} key={element.id} onClick={() => setFactiveProduct(element.id)}>
                            <div className="border p-2 main_popular_categories_inner">
                            <Link to={`/BlogPage/${element.id}/${element.productName}`} style={{textDecoration:"none"}}>
                                <img src={element.productImg} className="popular_cargories-img" alt="" />
                                <span className="d-flex text-center justify-content-center main_popular_categ_name">{element.productName}</span>
                    </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-md-5 mt-sm-5">
                    <div className="col-md-4 col-sm-7 text-align-start">
                        <h2 className="d-flex text-start">Popular Products</h2>
                    </div>
                    <div className="col-md-4 col-sm-5 offset-md-4 d-flex align-items-center justify-content-end last-col-gap">
                        <span onClick={() => setShowAllt(!showAllt)}>
                            {showAllt ? "Show Less" : "View All"}</span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                </div>

                <div className="row popular_productMain mt-3">
                    {displayedProductst.filter(element => element.product === "active").map((element) => (
                        <div
                            className={`col-md-2 col-sm-6 col-12 border position-relative p-3 main_click_box ${activeProduct === element.id ? "active" : ""}`}
                            key={element.id}
                            onClick={() => setActiveProduct(element.id)}
                        >
                            {element.DiscountAmount && (
                                <button type="button" className="btn btn-danger position-absolute">
                                    {element.DiscountAmount}
                                </button>
                            )}
                            <img src={element.productImg} className="products_img" alt="" />
                            <Link to={`/productDescriptionpage/${element.id}`} style={{color:"black"}} className="home-click-btn">
                            <span className="d-flex activedtextcolor">{element.productName}</span></Link>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="d-flex">
                                    {Array.isArray(element.ProductPrice) ? (
                                        <>
                                            <b>{element.ProductPrice[0]}</b>
                                            <span className="text-muted"><del>{element.ProductPrice[1]}</del></span>
                                        </>
                                    ) : (
                                        <b>{element.ProductPrice}</b>
                                    )}
                                </span>
                                <button type="button" class="btn btn-outline-success popular-produ-img"><FontAwesomeIcon icon={faBagShopping} /></button>

                            </div>

                            <div className="d-flex gap-3 star-five mt-1">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} style={{ color: index < element.productReting ? "orange" : "lightgray" }} />
                                ))}
                            </div>
                            <div className="position-absolute  activeshowbuttons">
                            <button type="button" className="btn btn-outline-dark popular-produ-img" onClick={() => toggleWishlist(element)}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ color: wishlist.some((item) => item.id === element.id) ? "red" : "black" }}
                        />
                    </button>
                                <button type="button" class="btn btn-outline-dark popular-produ-img mt-2" onClick={() => {
                                    openModel(element)
                                }}>
                                    <FontAwesomeIcon icon={faEye} /></button>
                            </div>
                        </div>
                    ))}
                </div>
     
                <div className="row mt-5 Three-img">
                    <div className="col-md-4 col-sm-6 ">
                        <img src="./Img/Bannar (5).png" alt="" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <img src="./Img/Bannar (3).png" alt="" />
                    </div>
                    <div className="col-md-4 col-sm-12 d-sm-none d-md-flex">
                        <img src="./Img/Bannar (4).png" alt="" />
                    </div>
                </div>

                <div className="row mt-md-5 mt-sm-5 mt-3">
                    <div className="col-md-4 text-align-start col-sm-7 col-8">
                        <h2 className="d-flex text-start">Hots Deals</h2>
                    </div>
                    <div className="col-md-4 col-sm-5 offset-md-4 d-flex align-items-center justify-content-end last-col-gap col-4">
                        <span>View All</span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                </div>

                <div className="row mt-4 popular_productMain d-flex justify-content-center">
                    {Popular_Products.filter(element => element.discount === "active").slice(0, visibleProducts).map((element) => (
                        <div
                            className={`col-md-2 col-sm-6 col-12 border position-relative p-3 main_click_box ${activeProduct === element.id ? "active" : ""}`}
                            key={element.id}
                            onClick={() => setActiveProduct(element.id)}
                        >
                            {element.DiscountAmount && (
                                <button type="button" className="btn btn-danger position-absolute">
                                    {element.DiscountAmount}
                                </button>
                            )}
                            <img src={element.productImg} className="products_img" alt="" />
                            <span className="d-flex activedtextcolor">{element.productName}</span>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="d-flex">
                                    {Array.isArray(element.ProductPrice) ? (
                                        <>
                                            <b>{element.ProductPrice[0]}</b>
                                            <span className="text-muted"><del>{element.ProductPrice[1]}</del></span>
                                        </>
                                    ) : (
                                        <b>{element.ProductPrice}</b>
                                    )}
                                </span>
                                <button type="button" class="btn btn-outline-success popular-produ-img"><FontAwesomeIcon icon={faBagShopping} /></button>

                            </div>

                            <div className="d-flex gap-3 star-five mt-1">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} style={{ color: index < element.productReting ? "orange" : "lightgray" }} />
                                ))}
                            </div>
                            <div className="position-absolute  activeshowbuttons">
                                <button type="button" class="btn btn-outline-dark popular-produ-img">
                                    <FontAwesomeIcon icon={faHeart} /></button>
                                <button type="button" class="btn btn-outline-dark popular-produ-img mt-2">
                                    <FontAwesomeIcon icon={faEye} /></button>
                            </div>
                        </div>
                    ))}
                    {visibleProducts < Popular_Products.filter((element) => element.discount === "active").length && (
                        <div className="text-center mt-5">
                            <button onClick={loadMoreProducts} className="btn btn-outline-dark">
                                Load More
                            </button>
                        </div>
                    )}
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <img src="./Img/Discount Bannar.png" alt="" style={{ height: "100%", width: "100%" }} />
                    </div>
                </div>



                <div className="row mt-md-5 mt-5">
                    <div className="col-md-4 col-sm-7 col-8  text-align-start">
                        <h2 className="d-flex text-start">Featured Products</h2>
                    </div>
                    <div className="col-md-4 col-sm-5 offset-md-4 col-4 d-flex align-items-center justify-content-end last-col-gap">
                        <span onClick={() => setShowAlltt(!showAlltt)}>
                            {showAlltt ? "Show Less" : "View All"}</span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                </div>
                <div className="row popular_productMain mt-3">
                    {displayedProductstt.map((element) => (
                        <div className={`col-md-2 col-sm-6 border position-relative p-3 main_click_box ${sactivieProduct === element.id ? "active" : ""}`}
                            key={element.id}
                            onClick={() => setSactiveProduct(element.id)}>
                            <img src={element.productImg} className="products_img" alt="" />
                            <span className="d-flex activedtextcolor">{element.productName}</span>
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="d-flex">
                                    {Array.isArray(element.ProductPrice) ? (
                                        <>
                                            <b>{element.ProductPrice[0]}</b>
                                            <span className="text-muted"><del>{element.ProductPrice[1]}</del></span>
                                        </>
                                    ) : (
                                        <b>{element.ProductPrice}</b>
                                    )}
                                </span>
                                <button type="button" class="btn btn-outline-success popular-produ-img"><FontAwesomeIcon icon={faBagShopping} /></button>

                            </div>

                            <div className="d-flex gap-3 star-five mt-1">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} style={{ color: index < element.productReting ? "orange" : "lightgray" }} />
                                ))}
                            </div>
                            <div className="position-absolute  activeshowbuttons">
                                <button type="button" class="btn btn-outline-dark popular-produ-img">
                                    <FontAwesomeIcon icon={faHeart} /></button>
                                <button type="button" class="btn btn-outline-dark popular-produ-img mt-2">
                                    <FontAwesomeIcon icon={faEye} /></button>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="row mt-5 d-flex justify-content-center">
                    <h2 className="text-center">Latest News</h2>


                </div>
                <div className="row mt-3">
                    {Latest_News.slice(0,3).map((element) => (
                        <div className="col-md-4 col-sm-6" key={element.key}>
                            <img src={element.ProductImg} alt="" className="latest_news_img" />
                            <span className="d-flex align-item-center mt-2 text-muted news-gap">{element.productEffect.map((ele, i) => (
                                <div key={i} className="d-flex align-items-center gap-md-3 gap-sm-1">
                                    <i className={ele.icon} />
                                    <span>{ele.title}</span>
                                </div>
                            ))}</span>
                            <p className="text-start mt-2 client-viewText">{element.ProductTitle}</p>
                           
                            <span className="d-flex fs-5 align-items-center gap-2 text-success">Read More <FontAwesomeIcon icon={faArrowRight} /></span>
                        </div>
                    ))}
                </div>

<div className="row mt-md-5">
<h2 className="d-flex">Client Testimonials</h2>
</div>
                <div className="position-relative">

      <Swiper 
        spaceBetween={30}  
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
            320: { slidesPerView: 1 },  
            767: { slidesPerView: 2 },  
            1024: { slidesPerView: 3 }, 
          }}
      >
        {Client_Testimonials.map((review) => (
          <SwiperSlide key={review.id}>
            <div className=" client-card">
                <img src="./Img/Vector.png" className="d-flex " alt="" style={{height: "26px"}}/>
                <span className="client-review mt-2">{review.clientreview}</span>
             <div className="d-flex align-item-center mt-4">
             <img
                src={review.clientProfile}
                alt={review.ClientName} style={{height: "40px" , width:"40px"}}
                className="client-img d-flex"
              />
              <div className="review-left-margin">
              <span className="d-flex review-sm-span"><b>{review.ClientName}</b></span>
              <span className="d-flex">costmer</span>
              </div>
              <div className="d-flex gap-md-3 star-five mt-2 margin-left" >
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} style={{ color: index < review.reting ? "orange" : "lightgray" }} />
                                ))}
                            </div>
             </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

                <div className="row">
                    <div className="col-md-12">
                        <img src="./Img/Company Logo.png" alt="" style={{ height: "100%", width: "100%" }} />
                    </div>
                </div>

                <h2 className="mb-4">Follow us on Instagram</h2>
                <div className="row mt-5">
                    <div className="col-md-2 col-sm-4 col-6 position-relative hover-insta-icon-main">
                        <img src="./Img/Instagram Post.png" alt="" className="hover-imgs" style={{ height: "100%", width: "100%" }} />
                        <i class="fa-brands fa-square-instagram position-absolute hover-insta-icon"></i>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 position-relative hover-insta-icon-main">
                        <img src="./Img/Instagram Post (1).png" className="hover-imgs" alt="" style={{ height: "100%", width: "100%" }} />
                        <i class="fa-brands fa-square-instagram position-absolute hover-insta-icon"></i>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-3 mt-md-0 mt-sm-0 position-relative hover-insta-icon-main">
                        <img src="./Img/Instagram Post (2).png" alt="" className="hover-imgs" style={{ height: "100%", width: "100%" }} />
                        <i class="fa-brands fa-square-instagram position-absolute hover-insta-icon"></i>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-sm-3 mt-3 mt-md-0 position-relative hover-insta-icon-main">
                        <img src="./Img/Instagram Post (3).png" alt="" className="hover-imgs" style={{ height: "100%", width: "100%" }} />
                        <i class="fa-brands fa-square-instagram position-absolute hover-insta-icon"></i>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-sm-3 mt-3 mt-md-0  position-relative hover-insta-icon-main">
                        <img src="./Img/Instagram Post (4).png" alt="" className="hover-imgs" style={{ height: "100%", width: "100%" }} />
                        <i class="fa-brands fa-square-instagram position-absolute hover-insta-icon"></i>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 mt-sm-3 mt-3 mt-md-0 position-relative hover-insta-icon-main">
                        <img src="./Img/Instagram Post (5).png" alt="" className="hover-imgs" style={{ height: "100%", width: "100%" }} />
                        <i class="fa-brands fa-square-instagram position-absolute hover-insta-icon"></i>
                    </div>
                </div>


            </div>






            {/* models  */}
            <div class="modal fade" id="quickViewModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content"> 
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      <div class="modal-body">
        <div class="row">
          {/* <!-- Left: Image Gallery --> */}
          <div class="col-md-6">
            <div class="d-flex flex-column align-items-center">
              <img src={selectedmodelImage} class="img-fluid mb-3" style={{height:"100%", width:"100%"}} alt="Product Image"/>

              <div class="d-flex gap-2">
                {modelData?.variants?.map((image,i) => (
                    <div className={`main_click_box ${selectedmodelImage === image ? "active" : ""}`} key={i} onClick={()=>{
                        setSelectedModelImage(image);
                    }}>
                        <img src={image} class="img-thumbnail" alt="Thumbnail 1"/>
                    </div>
                ))}
              </div>
            </div>
          </div>
          {/* <!-- Right: Product Details --> */}
          <div class="col-md-6">
          <h3 class="modal-title">{modelData.productName}<span class="badge bg-success">In Stock</span></h3>
           
            <div class="d-flex align-items-center gap-4 mt-2">
            <div className="d-flex gap-1 star-five mt-1">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} style={{ color: index < modelData.productReting ? "orange" : "lightgray" }} />
                                ))}
                            </div>
                            <span class="ms-2">4 Reviews</span>
              <span class="text-muted"><b>SKU:</b>2,51,594</span> 
            </div>

            <div class="mt-1 d-flex">
            <span className="d-flex fw-bold text-success fs-4 ms-2">
                                    {Array.isArray(modelData.ProductPrice) ? (
                                        <>
                                            <b>{modelData.ProductPrice[0]}</b>
                                            <span className="text-muted"><del>{modelData.ProductPrice[1]}</del></span>
                                        </>
                                    ) : (
                                        <b>{modelData.ProductPrice}</b>
                                    )}
                                </span>
              <span class="badge bg-danger ms-2">64% Off</span>
            </div>
            <hr />


        <div className="d-flex align-items-center justify-content-between">    <div class="d-flex align-items-center">
              <span class="fw-bold me-2">Brand:</span>
              <img src="/Img/Group 19.png" alt="Brand Logo" style={{height: "38px"}}/>
            </div>
            <div className="four-icon-hover-2 d-flex align-items-center">
                <span>Share item:</span>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-facebook"></i></a>

 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-twitter"></i>
  </a>
  <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
    <i className="fa-solid fa-p"></i>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram"></i></a>
            </div></div>

            <p class="mt-3 text-muted">
           {modelData.ProductDesciption}
            </p>
          <hr />
            <div class="d-flex align-items-center mt-4 justify-content-between  ">
              <div className="border d-flex" style={{borderRadius:"22px"}}>
              <button class="btn btn-outline-secondary" style={{borderRadius:"22px"}}>-</button>
              <input type="text" class="form-control text-center mx-2"  value="5" style={{width:"10px", border:"none"}}/>
              <button class="btn btn-outline-secondary" style={{borderRadius:"22px"}}>+</button>
              </div>
              <button class="btn ms-3 addtocardBtn d-flex align-items-center gap-2" style={{background:"green" , color:"white"}}>Add to Cart <FontAwesomeIcon icon={faBagShopping} /></button>
              <button type="button" class="btn btn-outline-dark popular-produ-img">
              <FontAwesomeIcon icon={faHeart} /></button>
            </div>
            <hr />

            <p class="mt-3"><strong>Category:</strong>{modelData.Productcategories}</p>    
            <p><strong>Tags:</strong> {modelData.ProductTags}</p>

    
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Home  