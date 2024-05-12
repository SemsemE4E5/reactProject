import * as React from "react";
import { Link } from "react-router-dom";
function ProductCard({ id, img, title, description, price }) {
    return (
      <div id="card" className='bg-white'>
        <img id="card-img" src={img} alt="" />
        <div id="left">
          <div id="top">
            <h3 className="text-danger">{title}</h3>
            <p className="text-primary">{price} &euro;</p>
          </div>
          <p id="bottom" className="text-dark">{(description.length > 100) ? description.substr(0,100) : (description.substr(0,100) + `....`)}</p>
          <Link to={`/product/${id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    );
  }
  export default ProductCard;