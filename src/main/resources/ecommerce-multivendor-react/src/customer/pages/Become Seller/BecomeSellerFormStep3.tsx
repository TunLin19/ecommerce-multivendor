import { Box, TextField } from "@mui/material";
import React from "react";

const BecomeSellerFormStep3 = ({ formik }: any) => {
  return (
    <Box>
      <div className="space-y-5">
        <TextField
          fullWidth
          name="backDetails.accountNumber"
          label="Account Number"
          value={formik.values.bankDetails.accountNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.bankDetails?.accountNumber &&
            Boolean(formik.errors.bankDetails?.accountNumber)
          }
          helperText={
            formik.touched.bankDetail?.accountNumber &&
            formik.errors.bankDetails?.accountNumber
          }
        />

        <TextField
          fullWidth
          name="backDetails.ifscCode"
          label="IFSC Code"
          value={formik.values.bankDetails.ifscCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.bankDetails?.ifscCode &&
            Boolean(formik.errors.bankDetails?.ifscCode)
          }
          helperText={
            formik.touched.bankDetail?.ifscCode &&
            formik.errors.bankDetails?.ifscCode
          }
        />

        <TextField
          fullWidth
          name="backDetails.accountHolderName"
          label="Account Holder Name"
          value={formik.values.bankDetails.accountHolderName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.bankDetails?.accountHolderName &&
            Boolean(formik.errors.bankDetails?.accountHolderName)
          }
          helperText={
            formik.touched.bankDetail?.accountHolderName &&
            formik.errors.bankDetails?.accountHolderName
          }
        />
      </div>
    </Box>
  );
};

export default BecomeSellerFormStep3;
