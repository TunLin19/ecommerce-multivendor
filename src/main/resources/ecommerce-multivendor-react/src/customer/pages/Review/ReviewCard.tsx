import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid, Grid2, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid2 container spacing={9}>
        <Grid2 size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              L
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Lin</p>
              <p className="opacity-70">2025-1-1 ..</p>
            </div>
          </div>
          <Rating readOnly value={4.5} precision={0.5} />
          <p>Value for money product, great product</p>
          <div>
            <img
              className="w-24 h-24 object-cover"
              src="https://product.hstatic.net/200000000133/product/24aale011d_-_24aqjc002x.2_dd8a5e80849b4e86a86131fe7c344e36_master.jpg"
              alt=""
            />
          </div>
        </Grid2>
      </Grid2>
      <div>
        <IconButton>
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
