import { Radio } from "@mui/material";
import React from "react";

const AddressCard = () => {
  const handleChage = (event: any) => {
    console.log(event.target.checked);
  };
  return (
    <div className="p-5 border rounded-md flex">
      <div>
        <Radio
          checked={true}
          onChange={handleChage}
          value=""
          name="radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Lin</h1>
        <p className="w-[320px]">HaNoi,VietNam</p>
        <p>
          <strong>Mobile:</strong> 0389359530
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
