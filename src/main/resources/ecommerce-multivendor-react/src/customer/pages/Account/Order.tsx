import React from "react";
import OrderItem from "./OrderItem";

const Order = () => {
  return (
    <div className="tex-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
        <p>From anytime</p>
        <div className="space-y-2">
          {[1, 1, 1, 1, 1].map((item) => (
            <OrderItem />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
