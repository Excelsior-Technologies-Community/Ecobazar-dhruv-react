import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Shopping_Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [updatedCart, setUpdatedCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

const handleCheckout = () => {
  navigate("/checkOutPage", { state: { cart: updatedCart, cartTotal: cartTotal } });
};

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart).map(item => ({ ...item, quantity: 1 }));
      setCart(parsedCart);
      setUpdatedCart(parsedCart);
      calculateTotal(parsedCart); // Initial total calculation
    }
  }, []);

  const increaseQuantity = (productId) => {
    setUpdatedCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setUpdatedCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = (cartData) => {
    const total = cartData.reduce((total, item) => {
      const price = Array.isArray(item.ProductPrice) ? parseFloat(item.ProductPrice[0]) : parseFloat(item.ProductPrice);
      return total + price * item.quantity;
    }, 0).toFixed(2);
    setCartTotal(total);
  };

  const updateCart = () => {
    setCart(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container text-center mt-5">
      <h2>My Shopping Cart</h2>

      <div className="row">
        <div className="col-8 d-flex mt-3 border p-2 mt-5">
          <div className="col-5"><b>Product</b></div>
          <div className="col-2"><b>Price</b></div>
          <div className="col-3"><b>Quantity</b></div>
          <div className="col-2"><b>Subtotal</b></div>
        </div>
        <div className="col-8" style={{ padding: "0px" }}>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            updatedCart.map((item) => (
              <div key={item.id} className="d-flex align-items-center border">
                <div className="col-5 d-flex align-items-center gap-2 p-4">
                  <img src={item.productImg} style={{ height: "50px", width: "50px" }} alt={item.productName} />
                  <span>{item.productName}</span>
                </div>
                <div className="col-2">${item.ProductPrice}</div>
                <div className="col-3 d-flex align-items-center justify-content-center">
                  <button className="btn btn-outline-secondary" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-outline-secondary" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                {/* This updates instantly */}
                <div className="col-2"><b>{(item.ProductPrice * item.quantity).toFixed(2)}</b></div>
              </div>
            ))
          )}

          <div className="d-flex align-items-center justify-content-between border p-3">
            <button type="button" className="btn btn-outline-secondary" style={{ width: "150px" }} onClick={() => navigate("/")}>Return To Shop</button>
            <button type="button" className="btn btn-outline-secondary" style={{ width: "150px" }} onClick={updateCart}>Update Cart</button>
          </div>
        </div>

        <div className="col-4">
          <div className="col-11 border p-4 offset-1">
            <h3 className="text-start">Cart Total</h3>
            <div className="d-flex align-items-center justify-content-between border-bottom p-2">
              <span>SubTotal:</span>
              <span>${cartTotal}</span> {/* Updates only on "Update Cart" */}
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom p-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom p-2">
              <span>Total:</span>
              <span><b>${cartTotal}</b></span> {/* Updates only on "Update Cart" */}
            </div>
           <Link to="/checkOutPage" state={{cart: updateCart, cartTotal: cartTotal}} style={{textDecoration:"none"}}>
            <button className="bnner-div-button d-flex justify-content-center mt-3 border-none" onClick={handleCheckout} style={{ width: "100%" }}>
              Proceed to checkout
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-3 col-md-8 col-sm-6 col-6">
        <div className="d-flex align-items-center justify-content-between border p-4">
          <h3 className="text-start">Coupon Code</h3>
          <div className="main-group position-relative">
            <input type="text" placeholder="Enter Code" style={{ width: "400px", border: "1px solid grey", padding: "6px", borderRadius: "30px" }} />
            <div className="position-absolute top-0 end-0">
              <button className="btn btn-dark" style={{ borderRadius: "28px" }}>Apply Coupon</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopping_Cart;
