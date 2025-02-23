import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold to-primary-color">PENDING</h1>
          <p>Arriving By Mon, 15 Jul</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://product.hstatic.net/200000000133/product/24aale011d_-_24aqjc002x.2_dd8a5e80849b4e86a86131fe7c344e36_master.jpg"
            alt=""
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Sweater Clothing</h1>
          <p>a sophisticated design, and soft</p>
          <p>
            <strong>Size:</strong>L
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
