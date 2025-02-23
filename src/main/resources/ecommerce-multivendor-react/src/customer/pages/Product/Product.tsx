import React, { useState } from "react";
import FilterSection from "./FilterSection";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import ProductCard from "./ProductCard";

const Product = () => {
  const [sort, setSort] = useState();
  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };
  const [page, setPage] = useState(1);
  const handlePageChange = (value: number) => {
    setPage(value);
  };
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <div className="-z-10 mt-10">
      <div>
        <h1 className="text-3xl text-center font-bold to-gray-700 pb-5 px-9 uppercase space-x-2">
          MEN T SHIRTS
        </h1>
      </div>
      <div className="lg:flex">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>
        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between items-center px-9 h-[40px]">
            <div className="relative w-[50%]">
              {!isLarge && (
                <IconButton>
                  <FilterAlt />
                </IconButton>
              )}
              {!isLarge && (
                <Box>
                  <FilterSection />
                </Box>
              )}
            </div>

            <FormControl size="small" sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort"
                onChange={handleSortChange}
              >
                <MenuItem value={"price_low"}>Price: Low - Hight</MenuItem>
                <MenuItem value={"price_high"}>Price: Hight - Low</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Divider />
          <section
            className="product_section grid  sm:grid-cols-2 md:grid-cols-3
          lg:grid-cols-4 gap-y-5  px-5 justify-center"
          >
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
              <ProductCard />
            ))}
          </section>
          <div className="flex justify-center py-10">
            <Pagination
              onChange={(e, value) => handlePageChange(value)}
              count={10}
              variant="outlined"
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
