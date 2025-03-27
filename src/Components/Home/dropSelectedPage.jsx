import { faAngleDown, faArrowRight, faBagShopping, faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import Popular_Products from '../AllJsonData/Popular_Products.json'
import Popular_Categories from '../AllJsonData/Popular_Categories.json'
import { useState } from "react";

function dropSelectedPage() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [activeProduct, setActiveProduct] = useState(null); 

    const filteredProducts = Popular_Products.filter((product) => {
      const categoryMatch = selectedCategory ? product.Categories === selectedCategory : true;
      const ratingMatch = selectedRating ? product.productReting >= selectedRating : true;
      const priceMatch = selectedPrice ? product.ProductPrice >= selectedPrice : true;
      return categoryMatch && ratingMatch && priceMatch ;
  });
    
    return(
        <>
        <div className="container text-center">
<div className="row mt-5 position-relative">
<img src="/Img/Discount Bannar (2).png" alt="" style={{height:"100%", width:"100%"}}/>
<div className="position-absolute main-benner-div">
<div className="d-flex text-light gap-2">
<div className="d-flex flex-column align-items-center">
    <span className="fs-5 text-success">00</span>
    <span>Days</span>
</div>
:
<div className="d-flex flex-column align-items-center">
    <span className="fs-5 text-success">02</span>
    <span>Hours</span>
</div>
:
<div className="d-flex flex-column align-items-center">
    <span className="fs-5 text-success">18</span>
    <span>Mins</span>
</div>
:
<div className="d-flex flex-column align-items-center">
    <span className="fs-5 text-success"  >46</span>
    <span>Secs</span>
</div>
</div>
<div className="mt-3">
    <button className="bnner-div-button border-none">Show Now<FontAwesomeIcon icon={faArrowRight} /></button>
</div>
</div>
</div>

<div className="row mt-5">
<div className="col-md-3 dropdown">
  <button className="btn  border gap-3 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Categories 
    <FontAwesomeIcon icon={ faAngleDown} className="margin-left"/>
  </button>
  <ul className="dropdown-menu">
            {Popular_Categories.map((category) => (
             
              <li key={category.id}>
                <a
                  className="dropdown-item"

                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.productName}
                </a>
              </li>
            ))}
            </ul>   

</div>
<div className="col-md-2 dropdown">
    <button className="btn border d-flex align-items-center gap-3" type="button" data-bs-toggle="dropdown">
        {selectedPrice ? `Price: $${selectedPrice}+` : "Select Price"}
        <FontAwesomeIcon icon={faAngleDown} className="ms-auto" />
    </button>
    <ul className="dropdown-menu">
        {[0,10, 20, 30, 40, 50].map((price) => (
            <li key={price}>
                <button className="dropdown-item" onClick={() => setSelectedPrice(price)}>
                    ${price} & Above
                </button>
            </li>
        ))}
    </ul>
</div>
{/* <div className="col-md-2 dropdown gap-3 d-flex align-items-center justify-content-between">
  <button className="btn  border gap-3 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Selected Price     <FontAwesomeIcon icon={ faAngleDown} className="margin-left"/>
  </button>
  <ul class="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}
<div className="col-md-2 dropdown">
                    <button className="btn border d-flex align-items-center gap-3" type="button" data-bs-toggle="dropdown">Selected Rating
                        {/* {selectedRating ? `Rating: ${selectedRating}+` : "Select Rating"} */}
                        <FontAwesomeIcon icon={faAngleDown} className="ms-auto" />
                    </button>
                    <ul className="dropdown-menu">
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <li key={rating}>
                                <button className="dropdown-item" onClick={() => setSelectedRating(rating)}>
                                    {rating} Stars & Up
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
<div className="col-md-2 dropdown gap-3 d-flex align-items-center justify-content-between offset-1">
  <button className="btn  border gap-4 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sort by: Latst <FontAwesomeIcon icon={faAngleDown} className="margin-left"/>
  </button>
  <ul class="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div className="col-md-2 dropdown gap-3 d-flex align-items-center ">
  <button className="btn  border gap-5 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Show:16<FontAwesomeIcon icon={ faAngleDown} className="margin-left"/>
  </button>
  <ul class="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>


<div className="row mt-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className={`col-md-4 col-sm-6 col-12 border position-relative p-3 main_click_box ${activeProduct === product.id ? "active" : ""}`}
            key={product.id}
            onClick={() => setActiveProduct(product.id)}>
              {product.DiscountAmount && (
                       <button type="button" className="btn btn-danger position-absolute">
                         {product.DiscountAmount}
                       </button>
                     )}
                     <img src={product.productImg} className="products_img" alt={product.productName} />
                     <span className="d-flex activedtextcolor">{product.productName}</span>
             
                     <div className="d-flex align-items-center justify-content-between">
                       <span className="d-flex">
                         {Array.isArray(product.ProductPrice) ? (
                           <>
                             <b>{product.ProductPrice[0]}</b>
                             <span className="text-muted"><del>{product.ProductPrice[1]}</del></span>
                           </>
                         ) : (
                           <b>{product.ProductPrice}</b>
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
                           style={{ color: index < product.productReting ? "orange" : "lightgray" }} 
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
          <p>No products available.</p>
        )}
      </div>
        </div>
        </>
    )
}

export default dropSelectedPage