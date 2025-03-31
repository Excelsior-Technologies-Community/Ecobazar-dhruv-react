import { faAngleDown, faHeart, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import Header_Inner from "./Heder_inner";
import { useState } from "react";

function Header() {
    const [cart , setCart] = useState([]);
    return (
        <>
            <div className="row">
                <div className="col-md-6 d-md-flex d-none align-items-center gap-5 top-header justify-content-center">
                <FontAwesomeIcon icon={faLocationDot} />
                    <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                </div>
                <div className="col-6 d-md-flex d-none align-items-center gap-5 top-header justify-content-center">
                    <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Eng
                    </a>
                    <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        USD
                    </a>
                    <span className="border-start ">Sign In/ Sign Up</span>
                </div>
                    <div className="col-md-4 col-sm-4 col-6 d-flex justify-content-center align-item-center logo-img">

                    <img src="./public/Img/Logo.png" alt="" />
                    </div>
                    <div className="col-md-4 d-sm-none d-none  input-group ">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn top-head-button" type="button" id="button-addon2">Button</button>
</div>
<div className="col-md-4 col-sm-4 col-6 offset-sm-4 d-flex justify-content-center align-item-center last-col-gap">
<div className="border-r-heart"><Link to="/wishlist"><FontAwesomeIcon icon={faHeart} className="font-heart border-r-heart-inner" /> </Link></div>
<div className="position-relative logo-img">
<img src="/Img/Cart.png" alt="" />
<div className="position-absolute bag-cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <span>{cart.length}</span>
</div>
</div>
<div className="d-flex justify-content-center align-item-center flex-column " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <span className="head-span">Shoping Cart</span>
    <span className="head-span-2"><b> $57.00</b></span>
</div>
</div>      
</div>


<div className="row navbar bg-dark border-bottom border-body mt-3 color-white" data-bs-theme="dark">
    <div className="d-md-none d-sm-flex col-5 col-sm-5 offset-1 offset-sm-1 "><img src="./Img/Categories.png" style={{height:"30px"}} alt="" /></div>
<div className="col-md-7 d-sm-none d-none d-md-flex align-items-center justify-content-center navbar-main">
    <Link to="./" style={{color:"white"}} className="home-click-btn">
<button class="btn d-flex align-items-center gap-2 color-white" type="button" data-bs-toggle="">
   Home
  <FontAwesomeIcon icon={ faAngleDown} className="margin-left"/>
  </button></Link>
  <Link to="/Blogpage" style={{color:"white" , textDecoration:"none"}}>
  <button class="btn d-flex align-items-center gap-2 color-white color-white" type="button" data-bs-toggle="dropdown" disabled>
   Shop
  <FontAwesomeIcon icon={ faAngleDown} className="margin-left"/>
  </button></Link>
    <Link to="/dropSelectedPage" style={{color:"white" , textDecoration:"none"}}>
  <button class="btn d-flex align-items-center gap-2 color-white color-white" type="button" data-bs-toggle="dropdown" disabled>
   Shop_2
  <FontAwesomeIcon icon={ faAngleDown} className="margin-left"/> 
  </button>
  </Link>
  <button class="btn d-flex align-items-center gap-2 color-white color-white" type="button" data-bs-toggle="dropdown" disabled>
   Pages
  <FontAwesomeIcon icon={ faAngleDown} className="margin-left"/>
  </button>
  <Link to="/BlogDetails" style={{color:"white" , textDecoration:"none"}}>
  <button class="btn d-flex align-items-center gap-2 color-white color-white" type="button" data-bs-toggle="dropdown" disabled>
   Blog
  <FontAwesomeIcon icon={ faAngleDown} className="margin-left"/>
  </button></Link>
  <Link to="/about" style={{color:"white"}}>
  <button class="btn gap-2 color-white" type="button" data-bs-toggle="dropdown" disabled>
   About Us
  </button></Link>
  <Link to="/contact" style={{color:"white" , textDecoration:"none"}}>
  <button class="btn gap-2 color-white" type="button" data-bs-toggle="dropdown" disabled>
   Contact Us
  </button></Link>
</div>
<div className="col-md-4 col-sm-4 col-6">
<FontAwesomeIcon icon={faPhoneVolume} />
<span>(219) 555-0114</span>
</div>
</div>   


           <Header_Inner /> 


        {/* offcanvas  */}

        </>
    )
}

export default Header