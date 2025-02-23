import React, { useState } from "react";
import CartItem from "./CartItem";
import { Close, LocalOffer } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { Button, IconButton, TextField } from "@mui/material";
import PricingCard from "./PricingCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
  };
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-56 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="cartItemSection lg:col-span-3 space-y-3">
          {[1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="col-span-2 text-sm space-y-3 ">
          <div className="border rounded-md px-5 py-3 space-y-5">
            <div className="flex gap-3 text-sm items-center">
              <div className="flex gap-3 text-sm items-center">
                <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />
              </div>
              <span>Apply Coupons</span>
            </div>
            {true ? (
              <div className="flex justify-between items-center">
                <TextField
                  onChange={handleChange}
                  placeholder="coupon code"
                  variant="outlined"
                />
                <Button size="small">Apply</Button>
              </div>
            ) : (
              <div className="flex">
                <div className="p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center">
                  <span className="">
                    Cupon01 Applied
                    <IconButton>
                      <Close className="text-red-600" />
                    </IconButton>
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="border rounded-md">
            <PricingCard />
            <div className="p-5">
              <Button
                onClick={() => navigate("/checkout")}
                fullWidth
                variant="contained"
                sx={{ py: "11px" }}
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
