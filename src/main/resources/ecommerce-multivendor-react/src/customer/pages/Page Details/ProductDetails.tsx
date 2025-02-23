import React, { useState } from "react";
import { images } from "../Product/ProductCard";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import {
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {images.map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://product.hstatic.net/200000000133/product/24aale011d_-_24aqjc002x.2_dd8a5e80849b4e86a86131fe7c344e36_master.jpg"
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-primary-color">
            Sweater Clothing
          </h1>
          <p className="text-gray-500 font-semibold">Eva De Eva</p>
          <div>
            <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
              <div className="flex gap-1 items-center">
                <span>4</span>
                <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />
              </div>
              <Divider orientation="vertical" flexItem />
              <span>234 Ratings</span>
            </div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans to-gray-800">599,500đ</span>
              <span className="thin-line-through text-gray-400">
                1,199,000đ
              </span>
              <span className="text-primary-color font-semibold">-50%</span>
            </div>
            <p className="text-sm">Free shipping</p>
          </div>

          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>

            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarantee</p>
            </div>

            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free Shipping & Returns</p>
            </div>

            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on delivery might be available</p>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <AddIcon />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              Add to Bag
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Whishlist
            </Button>
          </div>
          <div className="mt-5">
            <p>
              The sweater by Eva De Eva features an elegant style, a
              sophisticated design, and soft, breathable fabric that provides
              excellent warmth while ensuring comfort. Check the image of the
              blouse piece to understand how the actual blouse piece looks like.
            </p>
          </div>
          <div className="mt-7 space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>
      <div className="mt-20">
        <h1 className="text-lg font-bold">Similar Product</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
