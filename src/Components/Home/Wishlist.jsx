import { useWishlist } from "./Context/WishlistContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faTrash } from "@fortawesome/free-solid-svg-icons";

function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="container mt-5">
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
                  style={{ height: "70px", width: "70px" }}
                />
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
                >
                  Add to Cart <FontAwesomeIcon icon={faBagShopping} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
