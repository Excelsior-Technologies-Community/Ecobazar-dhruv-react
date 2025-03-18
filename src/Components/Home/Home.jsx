import { faArrowRightLong, faBagShopping, faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popular_Categories from '../AllJsonData/Popular_Categories.json'
import Popular_Products from '../AllJsonData/Popular_Products.json'
import Featured_Products from '../AllJsonData/Featured_Products.json'
import Latest_News from '../AllJsonData/Latest_News.json'
import { useState } from "react";



function Home() {
    const [activeProduct, setActiveProduct] = useState(null);
    const [factivieProduct, setFactiveProduct] = useState(null);
    const [sactivieProduct, setSactiveProduct] = useState(null);


    const [showAll, setShowAll] = useState(false);
    const [showAllt, setShowAllt] = useState(false);
    const [showAlltt, setShowAlltt] = useState(false);

    const displayedProducts = showAll ? Popular_Categories : Popular_Categories.slice(0, 12);
    const displayedProductst = showAllt ? Popular_Products : Popular_Products.slice(0, 10);
    const displayedProductstt = showAlltt ? Featured_Products : Featured_Products.slice(0, 5);
    return (
        <>
            <div className="container text-center mt-md-5">
                <div className="row">
                    <div className="col-md-8  home-img" >
                        <img src="./Img/Bannar Big.png" alt="" />
                    </div>
                    <div className="col-4 home-s-img">
                        <img src="./Img/Bannar.png" alt="" />
                        <img src="./Img/Bannar (1).png" className="mt-4" alt="" />
                    </div>

                    <div className="col-md-12 home-buttom-img">
                        <img src="./Img/Featured.png" alt="" />
                    </div>


                </div>
                <div className="row">
                    <div className="col-md-4 text-align-start">
                        <h2 className="d-flex text-start">Popular Categories</h2>
                    </div>
                    <div className="col-md-4 offset-md-4 d-flex align-items-center justify-content-end last-col-gap">
                        <span onClick={() => setShowAll(!showAll)}>
                            {showAll ? "Show Less" : "View All"} </span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                </div>


                <div className="row">
                    {displayedProducts.map((element) => (
                        <div className={`col-md-2 mt-3 main_popular_categories ${factivieProduct === element.id ? "active" : ""}`} key={element.id} onClick={() => setFactiveProduct(element.id)}>
                            <div className="border p-2 main_popular_categories_inner">
                                <img src={element.productImg} className="popular_cargories-img" alt="" />
                                <span className="d-flex text-center justify-content-center main_popular_categ_name">{element.productName}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-md-5">
                    <div className="col-md-4 text-align-start">
                        <h2 className="d-flex text-start">Popular Products</h2>
                    </div>
                    <div className="col-md-4 offset-md-4 d-flex align-items-center justify-content-end last-col-gap">
                        <span onClick={() => setShowAllt(!showAllt)}>
                            {showAllt ? "Show Less" : "View All"}</span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                </div>

                <div className="row popular_productMain mt-3">
                    {displayedProductst.map((element) => (
                        <div
                            className={`col-md-2 border position-relative p-3 main_click_box ${activeProduct === element.id ? "active" : ""}`}
                            key={element.id}
                            onClick={() => setActiveProduct(element.id)}
                        >
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
                    <div className="col-md-4">
                        <img src="./Img/Bannar (5).png" alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src="./Img/Bannar (3).png" alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src="./Img/Bannar (4).png" alt="" />
                    </div>
                </div>


                <div className="row mt-md-5">
                    <div className="col-md-4 text-align-start">
                        <h2 className="d-flex text-start">Featured Products</h2>
                    </div>
                    <div className="col-md-4 offset-md-4 d-flex align-items-center justify-content-end last-col-gap">
                        <span onClick={() => setShowAlltt(!showAlltt)}>
                        {showAlltt ? "Show Less" : "View All"}</span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </div>
                </div>
                <div className="row popular_productMain mt-3">
                    {displayedProductstt.map((element) => (
                        <div className={`col-md-2 border position-relative p-3 main_click_box ${sactivieProduct === element.id ? "active" : ""}`}
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
            {Latest_News.map((element) => (
                <div className="col-md-4" key={element.key}>
<img src={element.ProductImg} alt="" className="latest_news_img"/>
<p className="text-start mt-2">{element.ProductTitle}</p>
                </div>
               ))}
            </div>
            </div>


        </>
    )
}

export default Home  