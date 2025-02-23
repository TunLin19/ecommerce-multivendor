import { Divider } from "@mui/material";
import React from "react";

const PricingCard = () => {
  return (
    <div className="space-y-3 p-5">
      <div className="flex justify-between items-center">
        <span>Subtotal</span>
        <span>1299,500đ</span>
      </div>

      <div className="flex justify-between items-center">
        <span>Discount</span>
        <span>1299,500đ</span>
      </div>

      <div className="flex justify-between items-center">
        <span>Shipping</span>
        <span>1299,500đ</span>
      </div>

      <div className="flex justify-between items-center">
        <span>Plateform</span>
        <span>1299,500đ</span>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <span>Total</span>
        <span>1299,500đ</span>
      </div>
    </div>
  );
};

export default PricingCard;
