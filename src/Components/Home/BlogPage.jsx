import { faAngleDown, faBagShopping, faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popular_Products from '../AllJsonData/Popular_Products.json'
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";



function BlogPage() { 
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeProduct, setActiveProduct] = useState(null); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [price, setPrice] = useState(20); // Initial price value


  const [modelData, setModelData] = useState({});
    const [selectedmodelImage, setSelectedModelImage] = useState({});


    const openModel = (item)=>{
        setModelData(item);
        setSelectedModelImage(item.variants[0])
        const myModal = new bootstrap.Modal(document.getElementById("quickViewModal"));
        myModal.show();
    }

  

  const handlePriceChange = (event) => {
    setPrice(event.target.value); // Update price when slider moves
  };

  useEffect(() => {
    let filtered = Popular_Products;
    
    // Filter by Category
    if (id) {
      filtered = filtered.filter(product => product.Categories === id);
    }

    // Filter by Rating 
    if (selectedRating) {
      filtered = filtered.filter(product => product.productReting >= selectedRating);
    }

    
    filtered = filtered.filter(product => {
      const productPrice = Array.isArray(product.ProductPrice) ? product.ProductPrice[0] : product.ProductPrice;
      return Number(productPrice) <= price;
    });
    
    setFilteredProducts(filtered);
  }, [id, selectedRating , price]);
  
  const handleRatingChange = (rating) => {
    setSelectedRating(rating === selectedRating ? null : rating); // Toggle selection
  };

  const handleCategoryChange = (category) => {
    if (!category || !category.id || !category.name) {
      console.error("Invalid category selected:", category);
      return;
      
    }
    navigate(`/BlogPage/${category.id}/${category.name}`);
  }

  
  return (

    <>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-2"><button type="button" class="btn btn-success">Filter <img src="/Img/Filter 24px.png" alt="" style={{ height: "30%", width: "30%" }} /></button></div>
          <div className="col-md-6">
            <label htmlFor="">Sort List :
              <select name="" id="" style={{ width: "180px" }}>
                <option value="" selected>Latest</option>
                <option value="" >Latest</option>
                <option value="" >Latest</option>
                <option value=""  >Latest</option>
              </select>
            </label>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <span><b>52</b>Results Found</span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="d-flex justify-content-between align-items-center mt-md-4">
              <h2>All Categories</h2>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div id="categoryList" className="collapse show mt-2">
            <ul className="list-unstyled">
              {[
                { id: "1", name: "Fresh Fruit" },
                { id: "2", name: "Vegetables" },
                { id: "3", name: "Meat & Fish" },
                { id: "4", name: "Snacks" },
                { id: "5", name: "Beverages" },
                { id: "6", name: "Beauty & Health" },
                { id: "7", name: "Bread & Bakery" },
                { id: "8", name: "Baking Needs" },
                { id: "9", name: "Cooking" },
                { id: "10", name: "Diabetic Food" },
                { id: "11", name: "Dish Detergents" },
                { id: "12", name: "Oil" },
              ].map((category) => (
                <li className="form-check d-flex" key={category.id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    id={`category-${category.id}`}
                    value={category.id}
                    checked={id === category.id} 
                    onChange={() => handleCategoryChange(category)}
                  />
                  <label className="form-check-label" htmlFor={`category-${category.id}`}>
                    {category.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h2>Price</h2>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className="mt-3">
      <div className="d-flex align-items-center">
        <input
          type="range"
          className="form-range"
          min="0"
          max="50"
          value={price}
          onChange={handlePriceChange} // Handle slider change
          style={{ color: "green" }}
        />
      </div>
      <label className="fw-bold">
        Price: <span className="text-dark">{price} — 50</span>
      </label>
    </div>

            <hr />
            <div className="d-flex justify-content-between mt-md-4 align-items-center">
              <h2>Rating</h2>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>

            {[5, 4, 3, 2, 1].map((rating, index) => (
  <div className="form-check d-flex mt-2" key={index}>
    <input
      className="form-check-input"
      type="checkbox"
      value={rating}
      id={`rating-${rating}`}
      checked={selectedRating === rating}
      onChange={() => handleRatingChange(rating)}
    />
    <label className="form-check-label" htmlFor={`rating-${rating}`}>
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < rating ? "strat-color" : "star-color-grey"}
        />
      ))}
      <b className="ms-1">{rating}.0 & up</b>
    </label>
  </div>
))}
            <hr />
            <div className="d-flex justify-content-between mt-md-4 align-items-center">
              <h2>Popular Tag</h2>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className="">
              <button type="button" class="btn All-button-categporis mt-2">Healthy</button>
              <button type="button" class="btn All-button-categporis mt-2">Low Fet</button>
              <button type="button" class="btn All-button-categporis mt-md-2">Vegetarian</button>
              <button type="button" class="btn All-button-categporis mt-md-2">kid Foods</button>
              <button type="button" class="btn All-button-categporis mt-md-2">Vitamins</button>
              <button type="button" class="btn All-button-categporis mt-md-2">Bred</button>
              <button type="button" class="btn All-button-categporis mt-md-2">Meat</button>
              <button type="button" class="btn All-button-categporis mt-md-2">Snkas</button>
              <button type="button" class="btn All-button-categporis mt-md-2">Tiffin</button>
              <button type="button" class="btn All-button-categporis mt-md-2">Lunch</button>
              <button type="button" class="btn All-button-categporis mt-md-2">Dinner</button>
              <button type="button" class="btn All-button-categporis mt-md-2">Breckfast</button>
              <button type="button" class="btn All-button-categporis mt-md-2">Fruit</button>
            </div>
            <div className="mt-md-5">
              <img src="/Img/Bannar (6).png" alt="" style={{ height: "100%", width: "100%" }} />
            </div>

            <h3 className="mt-5 mb-3">Sale Products</h3>
            <div className="row">
              {Popular_Products.filter(product => Array.isArray(product.ProductPrice)).map((ele) => (
                <div className={`col-md-12 d-flex align-items-center justify-content-center border main_click_box ${activeProduct === ele.id ? "active" : ""}`}
                  key={ele.id}
                  onClick={() => setActiveProduct(ele.id)}>
                  <img className="filtered-price-pro" src={ele.productImg} alt="" />
                  <div>
                    <span className="d-flex">{ele.productName}</span>
                    <span>{ele.ProductPrice}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="col-md-9">

          <div className="row">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((element) => (
      <div
        className={`col-md-4 col-sm-6 col-12 border position-relative p-3 main_click_box ${activeProduct === element.id ? "active" : ""}`}
        key={element.id}
        onClick={() => setActiveProduct(element.id)}
      >
        {element.DiscountAmount && (
          <button type="button" className="btn btn-danger position-absolute">
            {element.DiscountAmount}
          </button>
        )}
        <img src={element.productImg} className="products_img" alt={element.productName} />
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
          <button type="button" className="btn btn-outline-success popular-produ-img">
            <FontAwesomeIcon icon={faBagShopping} />
          </button>
        </div>

        <div className="d-flex gap-3 star-five mt-1">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon 
              key={index} 
              icon={faStar} 
              style={{ color: index < element.productReting ? "orange" : "lightgray" }} 
            />
          ))}
        </div>

        <div className="position-absolute activeshowbuttons">
          <button type="button" className="btn btn-outline-dark popular-produ-img">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button type="button" class="btn btn-outline-dark popular-produ-img mt-2" onClick={() => {
                                    openModel(element)
                                }}>
                                    <FontAwesomeIcon icon={faEye} /></button>
        </div>
      </div>
    ))
  ) : (
    <p>No products found.</p>
  )}
</div>

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

export default BlogPage