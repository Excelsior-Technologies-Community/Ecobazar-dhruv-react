import { faAngleRight, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useParams } from "react-router";

function Header_Inner() {

    const { category, subcategory, product ,name } = useParams();
    const location = useLocation();

    if(location.pathname === "/"){
        return null;
    }
    return(
        <>
        <div className="mt-3 position-relative">
          <img src="/Img/Breadcrumbs.png" alt="" style={{height:"100%",width:"100%"}}/>
          <div className="container text-center">
            <div className="d-flex align-items-center position-absolute top-0 mt-4 gap-3" style={{color:"white"}}>
          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon={faAngleRight} />
          <span>{category}</span>
          {subcategory && (
            <>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>{subcategory}</span>
            </>
          )}
          {product && (
            <>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>{product}</span>
            </>
          )}
            </div>
          </div>
        </div>
        
        </>
    )
}

export default Header_Inner