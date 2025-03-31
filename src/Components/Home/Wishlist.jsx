import { useWishlist } from "./Context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCircleXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState  } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const [cart , setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = ((product) => {

    const validPrice = Array.isArray(product.ProductPrice) ? parseFloat(product.ProductPrice[0]) : parseFloat(product.ProductPrice);

    const newProduct = {
      ...product,
      ProductPrice: validPrice,  // Only save the valid price, not discounted
    };

    setCart((prevCart) => [...prevCart,newProduct])
    toggleWishlist(product);
  })

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const goToCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Store cart in localStorage
  navigate("/shoppingCart"); // Navigate to cart page

  // Close the Bootstrap Offcanvas
  const offcanvas = document.querySelector('.offcanvas');
  if (offcanvas) {
    offcanvas.classList.remove('show');
    document.body.classList.remove('');
  }
};

  const totalPrice = cart.reduce((total, item) => {
    let price = Array.isArray(item.ProductPrice) ? parseFloat(item.ProductPrice[0]) : parseFloat(item.ProductPrice);
    return total + price;
  }, 0).toFixed(2);

  return (
    <><div className="container mt-5">
      <h2 className="text-center mt-4 mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="row">
          <div className="col-12 d-flex align-items-center border p-3">
            <span className="col-5 d-flex">Product</span>
            <span className="col-2 d-flex">Price</span>
            <span className="col-2">Stock Status</span>
          </div>
          {wishlist.map((product) => (
            <div
              className="col-md-12 d-flex align-items-center col-sm-6 col-12 border p-3 position-relative"
              key={product.id}
            >
              <button
                className="btn btn-danger position-absolute top-1 end-0"
                onClick={() => toggleWishlist(product)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <div className="col-5 d-flex gap-3 align-items-center">
                <img
                  src={product.productImg}
                  className="products_img"
                  alt=""
                  style={{ height: "70px", width: "70px" }} />
                <Link
                  to={`/productDescriptionpage/${product.id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <span className="d-flex activedtextcolor">
                    {product.productName}
                  </span>
                </Link>
              </div>
              <div className="col-2 d-flex align-items-center justify-content-between">
                <span className="d-flex">
                  {Array.isArray(product.ProductPrice) ? (
                    <>
                      <b>{product.ProductPrice[0]}</b>
                      <span className="text-muted">
                        <del>{product.ProductPrice[1]}</del>
                      </span>
                    </>
                  ) : (
                    <b>{product.ProductPrice}</b>
                  )}
                </span>
              </div>
              <div className="col-2">
                <span>{product.StockStatus}</span>
              </div>
              <div className="col-3">
                <button
                  class="btn ms-3 addtocardBtn d-flex align-items-center gap-2"
                  style={{ background: "green", color: "white" }}
                  onClick={() => addToCart(product)}>
                  Add to Cart <FontAwesomeIcon icon={faBagShopping} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    
    {/* OFFCANVAS IN ADDTOCART */}
    
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h4 className="offcanvas-title" id="offcanvasRightLabel">Shopping Cart ({cart.length})</h4>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="d-flex align-items-center mb-3 gap-2 border-bottom pb-2">
                <img src={item.productImg} style={{ height: "90px", width: "90px" }} alt={item.productName} />
               <div className="d-flex flex-column gap-1">
               <span className="">{item.productName}</span>
               <span className="">1kg <b> ${item.ProductPrice}</b></span>
               </div>
               <button className="btn ms-auto" onClick={() => removeFromCart(item.id)}>
               <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </div>
            ))
          )}

   <div className="offcanvas-footer position-absolute bottom-0 w-100">
    <div className="d-flex align-items-center justify-content-between">
      <span>{cart.length} product</span>
      <span><b>${totalPrice}</b></span>
    </div>
    <div className="d-flex flex-column gap-2 mt-3">
      <button className="btn btn-success">CheckOut</button>
      <Link to="/shoppingCart">
        <button 
          className="btn btn-success" 
          style={{ width: "100%" }} 
          onClick={goToCart}
        >
          Go To Cart
        </button>
      </Link>
    </div>
  </div>
        </div>
      </div></>
  );
}

export default Wishlist;
