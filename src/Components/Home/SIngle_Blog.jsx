import { useLocation } from "react-router-dom";
import { faAngleDown, faArrowRight, faCalendar, faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import Custom_FeedBack from '../AllJsonData/Custom_FeedBack.json'
import { useState } from "react";

function Single_Blog() {

    
    const location = useLocation();
    const { newsDetails } = location.state || {};
       const [load,setload] = useState(3)
    
        const loadMoreProduct = () => {
          setload((prev) => prev + 2 );
        }
      

    if (!newsDetails) {
        return <h2>No News Found</h2>;
    }

    return (
        <div className="container mt-4 mb-5">
            <div className="row">
<div className="col-7 mt-4">
 <img src={newsDetails.ProductImg} alt="" className="img-fluid" style={{height:"20%",width:"100%"}} />
 <span className="d-flex align-item-center mt-2 text-muted news-gap">{newsDetails.productEffect.map((ele, i) => (
                                <div key={i} className="d-flex align-items-center gap-md-3 gap-sm-1">
                                    <i className={ele.icon} />
                                    <span>{ele.title}</span>
                                </div>
                            ))}</span>
<h4 className="mt-2">{newsDetails.ProductTitle}</h4>
<div className="d-flex align-items-center mt-3 justify-content-between">
    <div className="d-flex gap-2">
       <img src={newsDetails.author.Image} alt="" /> 
       <div className="d-flex flex-column">
        <span><b>{newsDetails.author.name} </b></span>
        <span className="text-muted">{newsDetails.author.date} {newsDetails.author.read_time} </span>
       </div>
    </div>
    <div className="four-icon-hover-2 d-flex align-items-center">
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
    </div>
</div>
<hr />
 <span className="mt-3"><b>{newsDetails.descriptiontitle}</b></span>
 <span className="d-flex mt-3">{newsDetails.productdescriton.desp1}</span><br/>
 <span className="d-flex mt-1">{newsDetails.productdescriton.desp2}</span><br/>
 <div className="d-flex gap-3">
<img src={newsDetails.Imges.Img1} alt="" style={{height:"100%",width:"47%"}}/>
<img src={newsDetails.Imges.Img2} alt="" style={{height:"100%",width:"47%"}}/>
 </div>
 <span className="d-flex mt-3">{newsDetails.productdescriton.desp3}</span>
 <img className="mt-3 mb-3" src="/Img/Bannar (7).png" alt="" style={{height:"10%",width:"90%"}}/>
 <h4 class="mb-3">Leave a Comment</h4>
    <form>
        {/* <!-- Full Name --> */}
   <div className="d-flex gap-2">
   <div class="mb-3" style={{width:"100%"}}>
            <label for="fullName" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="fullName" placeholder="Enter your full name"/>
        </div>

        <div class="mb-3"  style={{width:"100%"}}>
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
        </div>
   </div>

        {/* <!-- Message --> */}
        <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="4" placeholder="Write your comment here..."></textarea>
        </div>

        {/* <!-- Save Checkbox --> */}
        <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="saveInfo"/>
            <label class="form-check-label" for="saveInfo">Save my name and email in this browser for the next time I comment.</label>
        </div>

        {/* <!-- Submit Button --> */}
        <button type="submit" class="btn btn-success">Post Comment</button>
    </form>
   <h4 className="mt-2">Comments</h4>
 <div className="comments-section" style={{ minHeight: "400px", overflow: "hidden" }}>
  {Custom_FeedBack.slice(0, load).map((element) => (
    <div className="col-12 mt-3" key={element.id}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-4">
          <img src={element.image} alt="" />
          <div className="d-flex flex-column align-items-start">
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
      <span className="d-flex text-start mt-2">{element.comment}</span>
    </div>
  ))}

  <button
    className="btn btn-outline-success mt-4"
    style={{ width: "110px", marginLeft: "50px" }}
    onClick={loadMoreProduct}
  >
    Load More
  </button>
</div>

</div>
<div className="col-md-4">
<div className="position-relative mt-4">
<input type="text" class="form-control" placeholder="         Search" aria-label="Username" aria-describedby="basic-addon1"/>
<div className="position-absolute blogDtsbtn"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
</div>  

<hr />

<h2 className="text-start">Top Categories</h2>
<div className="d-flex align-items-center justify-content-between mt-2"><span>Fresh Fruit</span><span>(134)</span></div>
<div className="d-flex align-items-center justify-content-between mt-1"><span>Vegetables</span><span>(150)</span></div>
<div className="d-flex align-items-center justify-content-between mt-1"><span>Cooking</span><span>(54)</span></div>
<div className="d-flex align-items-center justify-content-between mt-1"><span>Snaks</span><span>(47)</span></div>
<div className="d-flex align-items-center justify-content-between mt-1"><span>Beverages</span><span>(43)</span></div>
<div className="d-flex align-items-center justify-content-between mt-1"><span>Beauty & Health</span><span>(38)</span></div>
<div className="d-flex align-items-center justify-content-between mt-1"><span>Bread & Bakery</span><span>(15)</span></div>

 <hr />
            <div className="d-flex justify-content-between mt-md-4 align-items-center">
              <h2>Popular Tag</h2>
            </div>
            <div className="d-flex flex-wrap gap-1">
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
            </div>
            <hr />
            <h2 className="text-start">Over Gallery</h2>
            <div className="d-flex flex-wrap gap-2">
<img src="/Img/gallery.png" alt="" style={{height:"80px",width:"80px"}} />
<img src="/Img/gallery (1).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="/Img/gallery (2).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="/Img/gallery (3).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="/Img/gallery (4).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="/Img/gallery (5).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="/Img/gallery (6).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="/Img/gallery (7).png" alt="" style={{height:"80px",width:"80px"}}/>
            </div>
            <hr />
            <h2 className="text-start">Recently Added</h2>
            <div className="d-flex gap-3 mt-3">
                <img src="/Img/Image (14).png" alt="" />
                <div><h6 className="text-start">Curabitur porttitor orci eget nequ accumsan.</h6>
                <div className="d-flex gap-2 align-items-center"><FontAwesomeIcon icon={faCalendar} className=""/>
                <span>Apr 25, 2021</span></div></div>
            </div>
            <div className="d-flex gap-3 mt-3">
                <img src="/Img/Image (15).png" alt="" />
                <div><h6 className="text-start">Curabitur porttitor orci eget nequ accumsan.</h6>
                <div className="d-flex gap-2 align-items-center"><FontAwesomeIcon icon={faCalendar} className=""/>
                <span>Apr 25, 2021</span></div></div>
            </div>
            <div className="d-flex gap-3 mt-3">
                <img src="/Img/Image (16).png" alt="" />
                <div><h6 className="text-start">Curabitur porttitor orci eget nequ accumsan.</h6>
                <div className="d-flex gap-2 align-items-center"><FontAwesomeIcon icon={faCalendar} className=""/>
                <span>Apr 25, 2021</span></div></div>
            </div>
</div>
            </div>

        </div>
    );
}

export default Single_Blog;
