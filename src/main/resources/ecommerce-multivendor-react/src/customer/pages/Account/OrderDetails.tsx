import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { Payments } from "@mui/icons-material";

const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src="https://product.hstatic.net/200000000133/product/24aale011d_-_24aqjc002x.2_dd8a5e80849b4e86a86131fe7c344e36_master.jpg"
          alt=""
        />

        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">Sweater Clothing</h1>
          <p>a sophisticated design, and soft</p>
          <p>
            <strong>Size:</strong>L
          </p>
        </div>
        <div>
          <Button onClick={() => navigate(`/reviews/${5}/create`)}>
            Write Review
          </Button>
        </div>
      </section>
      <section className="boder p-5">
        <OrderStepper orderStatus={"SHIPPED"} />
      </section>
      <div className="border p-5">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>Lin</p>
            <Divider flexItem orientation="vertical" />
            <p>0389359530</p>
          </div>
          <p>HaNoi, VietNam</p>
        </div>
      </div>
      <div className="border space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total Item Price</p>
            <p>
              You saved{" "}
              <span className="text-green-500 font-medium text-xs">
                (699).00
              </span>{" "}
              on this item
            </p>
          </div>
          <p className="font-medium"> {799}.00</p>
        </div>
        <div className="px-5">
          <div
            className=" bg-teal-50 px-5 py-2 text-xs font-medium flex items-center
gap-3 "
          >
            <Payments />
            <p>Pay On Delivery</p>
          </div>
        </div>
        <Divider />
        <div className="px-5 pb-5">
          <p className="text-xs">
            <strong>Sold by: </strong>
            {"Virani Clothing"}
          </p>
        </div>
        <div className="p-10">
          <Button
            disabled={false}
            // onClick={handleCancelOrder}
            color="error"
            sx={{ py: "0.7rem" }}
            className=""
            variant="outlined"
            fullWidth
          >
            {false ? "order canceled" : "Cancel Order"}
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;
