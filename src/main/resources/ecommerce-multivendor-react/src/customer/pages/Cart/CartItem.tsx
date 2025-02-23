import { Close, Remove } from "@mui/icons-material";
import { Button, Divider, Icon, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const CartItem = () => {
  const handleUpdateQuantity = () => {};
  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src="https://product.hstatic.net/200000000133/product/24aale011d_-_24aqjc002x.2_dd8a5e80849b4e86a86131fe7c344e36_master.jpg"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg"></h1>
          <p className="text-gray-600">Sweater Clothing</p>
          <p>a sophisticated design, and soft</p>
          <p>
            <strong className="to-gray-400 text-xs">Sold by: Tun Lin</strong>
          </p>
          <p className="text-sm">7 days replacement available</p>
          <p className="text-sm text-gray-500">
            <strong>quantity:</strong>5
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button onClick={handleUpdateQuantity} disabled={true}>
              <Remove />
            </Button>
            <span>{4}</span>
            <Button onClick={handleUpdateQuantity}>
              <AddIcon />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700">599,500đ</p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton color="primary">
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
