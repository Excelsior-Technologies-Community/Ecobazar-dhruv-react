import { useLocation } from "react-router-dom";
import { faArrowRight, faCheck, faStar } from "@fortawesome/free-solid-svg-icons"
import { height } from "@fortawesome/free-solid-svg-icons/fa0"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Our_Awesome from '../AllJsonData/Our_Awesome.json'
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import {Swiper, SwiperSlide } from "swiper/react";
import Client_Testimonials from '../AllJsonData/Client_Testimonials.json'
import { useParams } from "react-router";

function About() {

    
    return(
      <>
    <div className="container">
<div className="row mt-5">
<div className="col-md-6 mt-md-4">
    <h1>100% Trusted Organic Food Store</h1>
    <span>Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
    </span>
</div>
<div className="col-md-6">
    <img src="./Img/Image (25).png" alt="" style={{height:"90%" ,width:"90%"}}/>
</div>

<div className="col-md-6 mt-5">
    <img src="./Img/Image (26).png" alt="" style={{height:"85%" ,width:"85%"}}/>
</div>
<div className="col-md-6 mt-5">
<h1>100% Trusted
Organic Food Store</h1>
<span>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. </span>
<div className="d-flex align-items-cente mt-3 gap-4">
    <div className="d-flex align-items-center gap-2"><img src="./Img/Icon (1).png" alt=""style={{height:"65px", width:"65px"}} />
    <div><span className="d-flex"><b>100% Organic food</b></span>
    <span className="d-flex font-size">100% healthy & Fresh food.</span></div></div>
    <div className="d-flex align-items-center gap-2"><img src="./Img/Icon (2).png" alt=""style={{height:"65px", width:"65px"}} />
    <div><span className="d-flex"><b>100% Organic food</b></span>
    <span className="d-flex font-size">100% healthy & Fresh food.</span></div></div></div>
    <div className="d-flex align-items-center mt-3 gap-4">
    <div className="d-flex align-items-center gap-2"><img src="./Img/Icon (3).png" alt=""style={{height:"65px", width:"65px"}} />
    <div><span className="d-flex"><b>100% Organic food</b></span>
    <span className="d-flex font-size">100% healthy & Fresh food.</span></div></div>
    <div className="d-flex align-items-center gap-2"><img src="./Img/Icon (4).png" alt=""style={{height:"65px", width:"65px"}} />
    <div><span className="d-flex"><b>100% Organic food</b></span>
    <span className="d-flex font-size">100% healthy & Fresh food.</span></div></div></div>
    <div className="d-flex align-items-center mt-3 gap-4">
    <div className="d-flex align-items-center gap-2"><img src="./Img/Icon (5).png" alt=""style={{height:"65px", width:"65px"}} />
    <div><span className="d-flex"><b>100% Organic food</b></span>
    <span className="d-flex font-size">100% healthy & Fresh food.</span></div></div>
    <div className="d-flex align-items-center gap-2"><img src="./Img/Icon.png" alt=""style={{height:"65px", width:"65px"}} />
    <div><span className="d-flex"><b>100% Organic food</b></span>
    <span className="d-flex font-size">100% healthy & Fresh food.</span></div></div></div>
    
</div>
<div className="col-md-6 mt-md-5">
    <h2>We Delivered, You Enjoy Your Order.</h2>
    <span>Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.</span>
    <div className="d-flex gap-3 mt-2 align-items-center"><FontAwesomeIcon icon={faCheck} style={{color:"green"}}/>
    <span>Sed in metus pellentesque.</span></div>
    <div className="d-flex gap-3 mt-2 align-items-center"><FontAwesomeIcon icon={faCheck} style={{color:"green"}}/>
    <span>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</span></div>
    <div className="d-flex gap-3 mt-2 align-items-center"><FontAwesomeIcon icon={faCheck} style={{color:"green"}}/>
    <span>Maecenas ut nunc fringilla erat varius.</span></div>
    <div className="mt-3">
        <button className="bnner-div-button border-none">Show Now<FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
</div>
<div className="col-md-6">
    <img src="./Img/Image (27).png" alt="" style={{height:"100%" ,width:"100%"}} />
</div>
</div>
</div>

<div className="" style={{background:"#faf5f5",padding:"30px"}}>
<div className="container text-center">
<div className="row mt-4 d-flex align-items-center justify-content-center">
    <h2 className="text-center">Our Awesome team</h2>
    <span className="" style={{width:"50%"}}>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</span>
</div>
    <div className="position-relative mt-5">

<Swiper 
  spaceBetween={30}  
  pagination={{ clickable: true }}
  navigation={true}
  modules={[Pagination, Navigation]}
  className="mySwiper"
  breakpoints={{
      320: { slidesPerView: 1 },  
      767: { slidesPerView: 2 },  
      1024: { slidesPerView: 4 }, 
    }}
>
  {Our_Awesome.map((our) => (
      <SwiperSlide key={our.id}>
 <div class="card position-relative main-hover-card" style={{height:"100%" , width:"100%"}}>
  <img src={our.ourImage} className="card-img-top" alt="..."/>
  <div class="card-body">
    <span className="card-text d-flex"><b>{our.ourName}</b></span>
    <span className="d-flex">{our.ourwork}</span>
  </div>
  <div className="position-absolute four-icon-hover d-flex gap-1">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-facebook"></i></a>

 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-twitter"></i>
  </a>
  <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
    <i className="fa-solid fa-p"></i>
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram"></i>
  </a>
  </div>
</div>
    </SwiperSlide>
  ))}
</Swiper>   
</div>
</div>
</div>

<div className="" style={{background: "e4e4e4", padding: "33px"}}>
<div className="container text-center">
<div className=" row mt-md-5">
<h2 className="d-flex">Client Testimonials</h2>
</div>
                <div className="position-relative mt-3">

      <Swiper 
        spaceBetween={30}  
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
            320: { slidesPerView: 1 },  
            767: { slidesPerView: 2 },  
            1024: { slidesPerView: 3 }, 
          }}
      >
        {Client_Testimonials.map((review) => (
          <SwiperSlide key={review.id}>
            <div className=" client-card">
                <img src="./Img/Vector.png" className="d-flex " alt="" style={{height: "26px"}}/>
                <span className="client-review mt-2">{review.clientreview}</span>
             <div className="d-flex align-item-center mt-4">
             <img
                src={review.clientProfile}
                alt={review.ClientName} style={{height: "40px" , width:"40px"}}
                className="client-img d-flex"
              />
              <div className="review-left-margin">
              <span className="d-flex review-sm-span"><b>{review.ClientName}</b></span>
              <span className="d-flex">costmer</span>
              </div>
              <div className="d-flex gap-md-3 star-five mt-2 margin-left" >
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} style={{ color: index < review.reting ? "orange" : "lightgray" }} />
                                ))}
                            </div>
             </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
</div>
</div>
<div className="container text-center">
<div className="row">
                    <div className="col-md-12">
                        <img src="./Img/Company Logo.png" alt="" style={{ height: "100%", width: "100%" }} />
                    </div>
                </div>
</div>
      </>
    )
}

export default About