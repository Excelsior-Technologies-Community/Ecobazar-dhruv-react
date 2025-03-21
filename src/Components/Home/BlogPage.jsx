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
  const [selectedCategories, setSelectedCategories] = useState(id);



  // useEffect(() => {
  //   setSelectedCategories(id);
  // }, [id]);


  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   if (name) {
  //     // Filter products based on selected category name
  //     const filtered = Popular_Products.filter((product) => product.Categories === decodeURIComponent(name));
  //     setFilteredProducts(filtered);  
  //   }
  // }, [name]);

  useEffect(() => {
    if (selectedCategories) {
      const filtered = Popular_Products.filter(
        (product) => product.Categories === decodeURIComponent(selectedCategories)
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategories]);

  const handleCategoryChange = (category) => {
    if (!category || !category.id || !category.name) {
      console.error("Invalid category selected:", category);
      return;
      
    }
    navigate(`/BlogPage/${category.id}/${encodeURIComponent(category.name)}`);
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
                    checked={selectedCategories === category.id} 
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
            <div class=" mt-3">

              <div class="d-flex align-items-center">
                <input type="range" class="form-range" min="0" max="2000" value="50" style={{ color: "green" }} />
              </div>
              <label class="fw-bold">Price: <span class="text-dark">50 — 1,500</span></label>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-md-4 align-items-center">
              <h2>Rating</h2>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div class="form-check d-flex mt-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <b className="ms-1">5.0 </b>
              </label>
            </div>
            <div class="form-check d-flex mt-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="star-color-grey" />
                <b className="ms-1">4.0 & up </b>
              </label>
            </div>
            <div class="form-check d-flex mt-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="star-color-grey" />
                <FontAwesomeIcon icon={faStar} className="star-color-grey" />
                <b className="ms-1">3.0 & up </b>
              </label>
            </div>
            <div class="form-check d-flex mt-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="star-color-grey" />
                <FontAwesomeIcon icon={faStar} className="star-color-grey" />
                <FontAwesomeIcon icon={faStar} className="star-color-grey" />
                <b className="ms-1">0.2 & up </b>
              </label>
            </div>
            <div class="form-check d-flex mt-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                <FontAwesomeIcon icon={faStar} className="strat-color" />
                <FontAwesomeIcon icon={faStar} className="star-color-grey" />
                <FontAwesomeIcon icon={faStar} className="star-color-grey" />
                <FontAwesomeIcon icon={faStar} className="star-color-grey" />
                <FontAwesomeIcon icon={faStar} className="star-color-grey" />
                <b className="ms-1">1.0 & up </b>
              </label>
            </div>
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
          <button type="button" className="btn btn-outline-dark popular-produ-img mt-2">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>
    ))
  ) : (
    <p>No products found.</p>
  )}
</div>

            {/* <div className="row">
              {filteredProducts.length > 0 ? (filteredProducts.map((element) => (
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
              ))})
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage