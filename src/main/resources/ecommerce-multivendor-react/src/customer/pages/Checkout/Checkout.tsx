import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const paymentGatwayList = [
  {
    value: "RAZORPAY",
    image:
      "data:image/png;base64,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",
    label: "",
  },
  {
    value: "STRIPE",
    image:
      "data:image/png;base64,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",
    label: "",
  },
];

const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentGatway, setPaymentGatway] = useState("RAZORPAY");
  const handlePaymentChange = (event: any) => {
    setPaymentGatway(event.target.value);
  };
  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Address</h1>
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
            <div>
              <div className="text-xs font-medium space-y-5">
                <p>Saved Addresses</p>
                <div className="space-y-3">
                  {[1, 1].map((item) => (
                    <AddressCard />
                  ))}
                </div>
              </div>
              <div className="py-4 px-5 rounded-md border">
                <Button onClick={handleOpen}>Add new Address</Button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="space-y-3 border p-5 rounded-md">
                <h1 className="text-primary-color font-medium pb-2 text-center">
                  Chose Payment Gatway
                </h1>
                <RadioGroup
                  className="flex justify-between pr-0"
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={handlePaymentChange}
                  value={paymentGatway}
                >
                  {paymentGatwayList.map((item) => (
                    <FormControlLabel
                      className="border w-[45%] pr-2 rounded-md flex justify-center"
                      value={item.value}
                      control={<Radio />}
                      label={
                        <img
                          className={`${
                            item.value == "stripe" ? "w-14" : ""
                          } object-cover`}
                          src={item.image}
                          alt={item.label}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="border rounded-md">
              <PricingCard />
              <div className="p-5">
                <Button fullWidth variant="contained" sx={{ py: "11px" }}>
                  Check out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;
