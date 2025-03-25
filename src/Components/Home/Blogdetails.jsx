import { faAngleDown, faArrowRight, faCalendar, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import Latest_News from '../AllJsonData/Latest_News.json'

function BlogDetails() {
    return(
        <>
        <div className="container text-center">
<div className="row mt-5">
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
<img src="./Img/gallery.png" alt="" style={{height:"80px",width:"80px"}} />
<img src="./Img/gallery (1).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="./Img/gallery (2).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="./Img/gallery (3).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="./Img/gallery (4).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="./Img/gallery (5).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="./Img/gallery (6).png" alt="" style={{height:"80px",width:"80px"}}/>
<img src="./Img/gallery (7).png" alt="" style={{height:"80px",width:"80px"}}/>
            </div>
            <hr />
            <h2 className="text-start">Recently Added</h2>
            <div className="d-flex gap-3 mt-3">
                <img src="./Img/Image (14).png" alt="" />
                <div><h6 className="text-start">Curabitur porttitor orci eget nequ accumsan.</h6>
                <div className="d-flex gap-2 align-items-center"><FontAwesomeIcon icon={faCalendar} className=""/>
                <span>Apr 25, 2021</span></div></div>
            </div>
            <div className="d-flex gap-3 mt-3">
                <img src="./Img/Image (15).png" alt="" />
                <div><h6 className="text-start">Curabitur porttitor orci eget nequ accumsan.</h6>
                <div className="d-flex gap-2 align-items-center"><FontAwesomeIcon icon={faCalendar} className=""/>
                <span>Apr 25, 2021</span></div></div>
            </div>
            <div className="d-flex gap-3 mt-3">
                <img src="./Img/Image (16).png" alt="" />
                <div><h6 className="text-start">Curabitur porttitor orci eget nequ accumsan.</h6>
                <div className="d-flex gap-2 align-items-center"><FontAwesomeIcon icon={faCalendar} className=""/>
                <span>Apr 25, 2021</span></div></div>
            </div>
</div>
<div className="col-md-8">
<div className="row ">
{Latest_News.map((element) => (
                        <div className="col-md-6 col-sm-6 mt-4" key={element.key}>
                            <img src={element.ProductImg} alt="" className="latest_news_img" />
                            <span className="d-flex align-item-center mt-2 text-muted news-gap">{element.productEffect.map((ele, i) => (
                                <div key={i} className="d-flex align-items-center gap-md-3 gap-sm-1">
                                    <i className={ele.icon} />
                                    <span>{ele.title}</span>
                                </div>
                            ))}</span>
                            <p className="text-start mt-2 client-viewText">{element.ProductTitle}</p>
                            <span className="d-flex fs-5 align-items-center gap-2 text-success">Read More <FontAwesomeIcon icon={faArrowRight} /></span>
                        </div>
                    ))}
</div>
</div>
</div>
        </div>
        </>
    )
}

export default BlogDetails