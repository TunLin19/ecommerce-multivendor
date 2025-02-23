import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
export const images = [
  "https://product.hstatic.net/200000000133/product/24aale011d_-_24aqjc002x.2_dd8a5e80849b4e86a86131fe7c344e36_master.jpg",
  "https://product.hstatic.net/200000000133/product/24aale011d_-_24aqjc002x.1_2c4a52ae81ea4acbacf47ff865ca8555_master.jpg",
  "https://product.hstatic.net/200000000133/product/24aale011d_-_24aqjc002x.4_66d5d4e76e894736a863917c63874576_master.jpg",
  "https://product.hstatic.net/200000000133/product/24aale011d_-_24aqjc002x.3_cb971bc28be1494e904bec64c20721be_master.jpg",
];
const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="group px-5 relative">
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((item, index) => (
          <img
            className="card-media object-top"
            src={item}
            alt=""
            style={{
              transform: `translateX(${(index - currentImage) * 100}%)`,
            }}
          />
        ))}
        {isHovered && (
          <div className="indicator flex flex-col items-center space-y-2">
            <div className="flex gap-3">
              <Button variant="contained" color="secondary">
                <Favorite sx={{ color: teal[500] }} />
              </Button>
              <Button variant="contained" color="secondary">
                <ModeComment sx={{ color: teal[500] }} />
              </Button>
            </div>
          </div>
        )}
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
  );
};

export default ProductCard;
