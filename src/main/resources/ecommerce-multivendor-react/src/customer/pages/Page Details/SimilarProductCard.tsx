import React from "react";
import "../Product/ProductCard.css";

const SimilarProductCard = () => {
  return (
    <div>
      <div className="group px-5 relative">
        <div className="card">
          <img
            className="card-media object-top"
            src="https://product.hstatic.net/200000000133/product/24aale011d_-_24aqjc002x.2_dd8a5e80849b4e86a86131fe7c344e36_master.jpg"
            alt=""
          />
        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md w-[240px]">
          <div className="name">
            <h1>Sweater Clothing</h1>
            <p>Eva De Eva</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans to-gray-800">599,500đ</span>
            <span className="thin-line-through text-gray-400">1,199,000đ</span>
            <span className="text-primary-color font-semibold">-50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
