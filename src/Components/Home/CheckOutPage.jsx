import { useLocation } from "react-router-dom";

function CheckOut() {
  const location = useLocation();
  const { cart, cartTotal } = location.state || { cart: [], cartTotal: 0 }; // Default values if state is missing

  return (
    <div className="container mt-5">
<div className="row">
<div className="col-8">
<h2 class="mb-4">Billing Information</h2>

<form>
    <div class="row">
        <div class="col-md-4 mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName" placeholder="Your first name"/>
        </div>
        <div class="col-md-4 mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName" placeholder="Your last name"/>
        </div>
        <div class="col-md-4 mb-3">
            <label for="companyName" class="form-label">Company Name (optional)</label>
            <input type="text" class="form-control" id="companyName" placeholder="Company name"/>
        </div>
    </div>

    <div class="mb-3">
        <label for="streetAddress" class="form-label">Street Address</label>
        <input type="text" class="form-control" id="streetAddress" placeholder="Street Address"/>
    </div>

    <div class="row">
        <div class="col-md-4 mb-3">
            <label for="country" class="form-label">Country / Region</label>
            <select class="form-select" id="country">
                <option selected>Select</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
            </select>
        </div>
        <div class="col-md-4 mb-3">
            <label for="state" class="form-label">State</label>
            <select class="form-select" id="state">
                <option selected>Selects</option>
            </select>
        </div>
        <div class="col-md-4 mb-3">
            <label for="zipCode" class="form-label">Zip Code</label>
            <input type="text" class="form-control" id="zipCode" placeholder="Zip Code"/>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Email Address"/>
        </div>
        <div class="col-md-6 mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input type="tel" class="form-control" id="phone" placeholder="Phone number"/>
        </div>
    </div>

    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="shipDifferent"/>
        <label class="form-check-label" for="shipDifferent">Ship to a different address</label>
    </div>

    <h3 class="mt-4">Additional Info</h3>

    <div class="mb-3">
        <label for="orderNotes" class="form-label">Order Notes (Optional)</label>
        <textarea class="form-control" id="orderNotes" rows="3" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
    </div>
</form>
</div>
<div className="col-4">
      <div className="border p-3">
        <h3>Order Summary</h3>
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="d-flex justify-content-between align-items-center mt-3">
               <div className="d-flex align-items-center gap-2">
               <img src={item.productImg} style={{ height: "50px", width: "50px" }} alt={item.productName} />
               <span>{item.productName}</span>
               </div>
                <span>${(item.ProductPrice * item.quantity).toFixed(2)}</span>
            
              </div>
            ))}
          </div>
        )}
            <div className="d-flex align-items-center justify-content-between border-bottom p-2 mt-3">
                    <span>Subtotal</span>
                    <span><b>${cartTotal}</b></span>
                </div>
                <div className="d-flex align-items-center justify-content-between border-bottom p-2">
                    <span>Shipping</span>
                    <span><b>Free</b></span>
                </div>

        <div className="d-flex align-items-center justify-content-between p-2">
                    <span>Total:</span>
                    <span><b>${cartTotal}</b></span>
                </div>
        <h5 className="mt-3">Payment Method</h5>
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Cash on Delivary
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Paypal
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Amazon Pay
  </label>
</div>
<button className="bnner-div-button d-flex justify-content-center mt-3 border-none" style={{ width: "100%" }}>
              Place Order
            </button>
      </div>
</div>
</div>
    </div>
  );
}

export default CheckOut;
