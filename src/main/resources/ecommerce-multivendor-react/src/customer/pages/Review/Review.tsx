import React from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://product.hstatic.net/200000000133/product/24aale011d_-_24aqjc002x.2_dd8a5e80849b4e86a86131fe7c344e36_master.jpg"
          alt=""
        />
        <div>
          <div>
            <p className="font-bold text-xl">Sweater Clothing</p>
            <p className="text-lg to-gray-600">........</p>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans to-gray-800">599,500đ</span>
              <span className="thin-line-through text-gray-400">
                1,199,000đ
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-5">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <div className="space-y-3">
            <ReviewCard />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;
