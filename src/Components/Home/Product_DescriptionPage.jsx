import { useEffect, useState } from 'react';
import Popular_Products from '../AllJsonData/Popular_Products.json'
import { faBagShopping, faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router';
import Custom_FeedBack from '../AllJsonData/Custom_FeedBack.json'

function ProductDesciptionPage() {
    const { id } = useParams(); // Get product ID from URL
    const [selectedModelImage, setSelectedModelImage] = useState("");
    const [modelData, setModelData] = useState({});
    const [showAllt, setShowAllt] = useState(false);
    const [sactivieProduct, setSactiveProduct] = useState(null);
    const displayedProductst = showAllt ? Popular_Products : Popular_Products.slice(0, 4);
    const [activeTab, setActiveTab] = useState("description");
    const [load,setload] = useState(4)

    const loadMoreProduct = () => {
      setload((prev) => prev + 2 );
    }
  
    useEffect(() => {
      const product = Popular_Products.find((item) => item.id === parseInt(id));
      if (product) {
        setModelData(product);
        setSelectedModelImage(product.variants[0]);
      }
    }, [id]);
    return(
        <>
        <div className="container text-center mt-5">
        <div className="row">
        {/* Left: Image Gallery */}
        <div className="col-md-6">
          <div className="d-flex align-items-center ">
  

            <div className="d-flex flex-column justify-content-start gap-4">
              {modelData?.variants?.map((image, i) => (
                <div
                  className={`main_click_box ${selectedModelImage === image ? "active" : ""}`}
                  key={i}
                  onClick={() => setSelectedModelImage(image)}
                >
                  <img src={image} className="img-thumbnail" alt="Thumbnail" style={{height:"80px" , width:"80px"}} />
                </div>
              ))}
            </div>
           <img src={selectedModelImage} className="img-fluid mb-3" style={{ height: "100%", width: "100%" }} alt="Product Image" />
          </div>
        </div> 

        {/* Right: Product Details */}
        <div className="col-md-6">
          <h3 className="modal-title text-start">
            {modelData.productName} <span className="badge bg-success">In Stock</span>
          </h3>

          <div className="d-flex align-items-center gap-4 mt-2">
            <div className="d-flex gap-1 star-five mt-1">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} style={{ color: index < modelData.productReting ? "orange" : "lightgray" }} />
              ))}
            </div>
            <span className="ms-2">4 Reviews</span>
            <span className="text-muted">
              <b>SKU:</b> {modelData.SKU || "N/A"}
            </span>
          </div>

          <div className="mt-1 d-flex">
            <span className="d-flex fw-bold text-success fs-4 ms-2">
              {Array.isArray(modelData.ProductPrice) ? (
                <>
                  <b>${modelData.ProductPrice[0]}</b>
                  <span className="text-muted">
                    <del>${modelData.ProductPrice[1]}</del>
                  </span>
                </>
              ) : (
                <b>${modelData.ProductPrice}</b>
              )}
            </span>
            <span className="badge pt-2  bg-danger ms-2">64% Off</span>
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
          <p className="mt-3 text-muted text-start">{modelData.ProductDesciption}</p>
          <hr />

          <div className="d-flex align-items-center mt-4 justify-content-between">
            <div className="border d-flex" style={{ borderRadius: "22px" }}>
              <button className="btn btn-outline-secondary" style={{ borderRadius: "22px" }}>
                -
              </button>
              <input type="text" className="form-control text-center mx-2" value="1" style={{ width: "40px", border: "none" }} />
              <button className="btn btn-outline-secondary" style={{ borderRadius: "22px" }}>
                +
              </button>
            </div>
            <button className="btn ms-3 addtocardbtn d-flex align-items-center gap-2" style={{ background: "green", color: "white" }}>
              Add to Cart <FontAwesomeIcon icon={faBagShopping} />
            </button>
            <button type="button" className="btn btn-outline-dark popular-produ-img">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>

          <hr />
          <p className="mt-3 text-start">
            <strong>Category:</strong> {modelData.Productcategories}
          </p>
          <p className='text-start'>
            <strong>Tags:</strong> {modelData.ProductTags}
          </p>
        </div>
      </div>
<div className='row'>
<div className="w-full">
      {/* Tabs */}
      <div className="flex border-b main-tabs">
        <button
          className={`py-2 px-4 main-activetab ${
            activeTab === "description" ? "active" : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Descriptions
        </button>
        <button
          className={`py-2 px-4 main-activetab ${
            activeTab === "additional" ? "active" : ""
          }`}
          onClick={() => setActiveTab("additional")}
        >
          Additional Information
        </button>
        <button
          className={`py-2 px-4 main-activetab ${
            activeTab === "feedback" ? "active" : ""
          }`}
          onClick={() => setActiveTab("feedback")}
        >
          Customer Feedback
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4 ">
        {activeTab === "description" && (
          <><div class="row">

                                    <div class="col-md-6">
                                       <span className='d-flex text-start'>Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.</span>

<span className='d-flex text-start mt-4'>Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. </span>

                                        <ul class="list-unstyled">
                                            <li className='text-start mt-4'><span class=" text-success fw-bold"><i class="fa-solid fa-check"></i></span> 100 g of fresh leaves provides.</li>
                                            <li className='text-start mt-2'><span class="text-success fw-bold"><i class="fa-solid fa-check"></i></span> Aliquam ac est at augue volutpat elementum.</li>
                                            <li className='text-start mt-2'><span class="text-success fw-bold"><i class="fa-solid fa-check"></i></span> Quisque nec enim eget sapien molestie.</li>
                                            <li className='text-start mt-2'><span class="text-success fw-bold"><i class="fa-solid fa-check"></i></span> Proin convallis odio volutpat finibus posuere.</li>
                                        </ul>
                                        <span className='mt-4 d-flex text-start'>Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. </span>
                                    </div>


                                    <div class="col-md-6 text-center">
                                      
                                           <img src="/public/Img/Video.png" alt="" style={{height:"70%" , width:"100%"}} />
                                           <div className='d-flex mt-4 align-items-center gap-1 justify-content-between'>
                                           <div class="border p-3 rounded d-flex gap-2 align-items-center" style={{width:"100%"}}>
                                                <span class="text-success"><i class="fa-solid fa-sack-dollar"></i></span>
                                                <div>
                                                    <h6 class="mb-1 text-start">64% Discount</h6>
                                                    <p class="mb-0">Save your 64% money with us</p>
                                                </div>
                                            </div>
                                            <div class="border p-3 rounded gap-2 d-flex align-items-center" style={{width:"100%"}}>
                                                <span class="text-success "><i class="fa-solid fa-sack-dollar"></i></span>
                                                <div>
                                                    <h6 class="mb-1 text-start">100% Organic</h6>
                                                    <p class="mb-0">100% Organic Vegetables</p>
                                                </div>
                                            </div>
                                           </div>
                                    </div>
                                </div></>
        )}

        {activeTab === "additional" && (
          <div className='row'>
          {modelData && ( 
            <div className='col-md-6'>
              <span className='text-start d-flex mt-1'><b>Weight: </b>{modelData.Weight}</span> 
              <span className='text-start d-flex mt-1'><b>Color: </b>{modelData.color}</span> 
              <span className='text-start d-flex mt-1'><b>Type: </b>{modelData.Type}</span> 
              <span className='text-start d-flex mt-1'><b>Categories: </b>{modelData.Productcategories}</span> 
              <span className='text-start d-flex mt-1'><b>Stock Status: </b>{modelData.StockStatus}</span> 
              <span className='text-start d-flex mt-1'><b>Tags: </b>{modelData.ProductTags}</span> 
            </div>
          )}
          <div className='col-md-6'>
          <img src="/public/Img/Video.png" alt="" style={{height:"70%" , width:"100%"}} />
                                           <div className='d-flex mt-4 align-items-center gap-1 justify-content-between'>
                                           <div class="border p-3 rounded d-flex gap-2 align-items-center" style={{width:"100%"}}>
                                                <span class="text-success"><i class="fa-solid fa-sack-dollar"></i></span>
                                                <div>
                                                    <h6 class="mb-1 text-start">64% Discount</h6>
                                                    <p class="mb-0">Save your 64% money with us</p>
                                                </div>
                                            </div>
                                            <div class="border p-3 rounded gap-2 d-flex align-items-center" style={{width:"100%"}}>
                                                <span class="text-success "><i class="fa-solid fa-sack-dollar"></i></span>
                                                <div>
                                                    <h6 class="mb-1 text-start">100% Organic</h6>
                                                    <p class="mb-0">100% Organic Vegetables</p>
                                                </div>
                                            </div>
                                           </div>
          </div>
        </div>
        
        )}

        {activeTab === "feedback" && (
          <div className='row'>
            {Custom_FeedBack.slice(0,load).map((element) => (
              <div className='col-12 mt-3' key={element.id}>
               <div className='d-flex align-items-center justify-content-between'>
               <div className='d-flex gap-4'>
                  <img src={element.image} alt="" />
                  <div className='d-flex flex-column align-items-start'>
                    <span><b>{element.name}</b></span>
                    <div className="d-flex gap-1 star-five mt-1">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} style={{ color: index < element.rating ? "orange" : "lightgray" }} />
                                ))}
                            </div>
                  </div>
                </div>
                <div> <span>{element.time}</span></div>
               </div>
                <span className='d-flex text-start mt-2'>{element.comment}</span>
              </div>
            ))}

            <button className='btn btn-outline-success mt-4' style={{width:"110px",marginLeft:"50px"}} onClick={loadMoreProduct}>Load More</button>
          </div>
        )}
      </div>
    </div>
</div>



      <div className='row mt-4'>
<h2 className='text-center'>Related Products</h2>
  {displayedProductst.map((element) => (
                        <div className={`col-md-3 col-sm-6 mt-4  border position-relative p-3 main_click_box ${sactivieProduct === element.id ? "active" : ""}`}
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
export default ProductDesciptionPage