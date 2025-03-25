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








function Home() {
    const [visibleProducts, setVisibleProducts] = useState(10);
    const [activeProduct, setActiveProduct] = useState(null);
    const [factivieProduct, setFactiveProduct] = useState(null);
    const [sactivieProduct, setSactiveProduct] = useState(null);


    // const [showAll, setShowAll] = useState(false);
    const [showAllt, setShowAllt] = useState(false);
    const [showAlltt, setShowAlltt] = useState(false);

    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 10);
    };

    // const displayedProducts = showAll ? Popular_Categories : Popular_Categories.slice(0, 12);
    const displayedProductst = showAllt ? Popular_Products : Popular_Products.slice(0, 10);
    const displayedProductstt = showAlltt ? Featured_Products : Featured_Products.slice(0, 5);

//    const id = "23";
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
                            <Link to={`/BlogPage/${element.id}`}>
                            <div className="border p-2 main_popular_categories_inner">
                                <img src={element.productImg} className="popular_cargories-img" alt="" />
                                <span className="d-flex text-center justify-content-center main_popular_categ_name">{element.productName}</span>
                            </div>
                    </Link>
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
                            <Link to="/BlogDetails">
                            <span className="d-flex fs-5 align-items-center gap-2 text-success">Read More <FontAwesomeIcon icon={faArrowRight} /></span></Link>
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

                <div className="row mt-md-5">
                    <div className="col-md-4 client-viewText mt-sm-4 mt-3">
                        <h4 className="">Subcribe our Newsletter</h4>
                        <span className="">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</span>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6 mt-3">
                        <div class="input-group mb-3 border-radius">
                            <input type="text" class="form-control border-radius" placeholder="Your email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-success border-radius" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 offset-sm-2 offset-md-0 d-flex mt-3 justify-content-between main-for-icon">
                        <i class="fa-brands fa-facebook frist-icons"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-solid fa-p"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home  