import { faAngleDown, faHeart, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    return (
        <>
            <div className="row">
                <div className="col-6 d-flex align-items-center gap-5 top-header justify-content-center">
                <FontAwesomeIcon icon={faLocationDot} />
                    <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                </div>
                <div className="col-6 d-flex align-items-center gap-5 top-header justify-content-center">
                    <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Eng
                    </a>
                    <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        USD
                    </a>
                    <span className="border-start ">Sign In/ Sign Up</span>
                </div>
                    <div className="col-md-4 d-flex justify-content-center align-item-center logo-img">

                    <img src="./public/Img/Logo.png" alt="" />
                    </div>
                    <div className="col-4 input-group ">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn top-head-button" type="button" id="button-addon2">Button</button>
</div>
<div className="col-md-4 d-flex justify-content-center align-item-center last-col-gap">
<div className="border-r-heart"><FontAwesomeIcon icon={faHeart} className="font-heart border-r-heart-inner" /></div>
<div className="position-relative logo-img">
<img src="./public/Img/Cart.png" alt="" />
<div className="position-absolute bag-cart">
    <span>2</span>
</div>
</div>
<div className="d-flex justify-content-center align-item-center flex-column ">
    <span className="head-span">Shoping Cart</span>
    <span className="head-span-2"><b> $57.00</b></span>
</div>
</div>      
</div>

<div className="row navbar bg-dark border-bottom border-body mt-3 color-white" data-bs-theme="dark">
<div className="col-md-7 d-flex align-items-center justify-content-center ">
<button class="btn gap-2 color-white" type="button" data-bs-toggle="dropdown">
   Home
  <FontAwesomeIcon icon={ faAngleDown} className="margin-left"/>
  </button>
  <button class="btn gap-2 color-white" type="button" data-bs-toggle="dropdown" disabled>
   Shop
  <FontAwesomeIcon icon={ faAngleDown} className="margin-left"/>
  </button>
  <button class="btn gap-2 color-white" type="button" data-bs-toggle="dropdown" disabled>
   Pages
  <FontAwesomeIcon icon={ faAngleDown} className="margin-left"/>
  </button>
  <button class="btn gap-2 color-white" type="button" data-bs-toggle="dropdown" disabled>
   Blog
  <FontAwesomeIcon icon={ faAngleDown} className="margin-left"/>
  </button>
  <button class="btn gap-2 color-white" type="button" data-bs-toggle="dropdown" disabled>
   About Us
  </button>
  <button class="btn gap-2 color-white" type="button" data-bs-toggle="dropdown" disabled>
   Contact Us
  </button>
</div>
<div className="col-md-4">
<FontAwesomeIcon icon={faPhoneVolume} />
<span>(219) 555-0114</span>
</div>
</div>   


            
        </>
    )
}

export default Header