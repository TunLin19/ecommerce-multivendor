import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/category/mainCategory";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  return (
    <div>
      <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1
                onClick={() => navigate("/")}
                className="logo cursor-pointer text-lg md:text-2xl text-[#00927c]"
              >
                Tun Lin
              </h1>
              <ul className="flex items-center font-medium text-gray-800">
                {mainCategory.map((item) => (
                  <li
                    onMouseLeave={() => {
                      setShowCategorySheet(false);
                    }}
                    onMouseEnter={() => {
                      setShowCategorySheet(true);
                      setSelectedCategory(item.categoryId);
                    }}
                    className="mainCategory hover:text-primary-color
                  hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-1 lg:gap-6 items-center">
              <IconButton>
                <SearchIcon />
              </IconButton>
              {true ? (
                <Button
                  onClick={() => navigate("/account/orders")}
                  className="flex items-center gap-2"
                >
                  <Avatar
                    sx={{ width: 29, height: 29 }}
                    src="https://lh3.googleusercontent.com/a/ACg8ocL3BFfCFizn317NIkDjj03BJH-A5WKaNzuAr-45lnVSc23DOus=s432-c-no"
                  />
                  <h1 className="font-semibold hidden lg:block">Lin</h1>
                </Button>
              ) : (
                <Button variant="contained">Login</Button>
              )}
              <IconButton>
                <FavoriteBorderIcon sx={{ fontSize: 29 }} />
              </IconButton>
              <IconButton onClick={() => navigate("/cart")}>
                <AddShoppingCartIcon
                  className="text-gray-700"
                  sx={{ fontSize: 29 }}
                />
              </IconButton>
              {isLarge && (
                <Button
                  onClick={() => navigate("/become-seller")}
                  startIcon={<StorefrontIcon />}
                  variant="outlined"
                >
                  Become Seller
                </Button>
              )}
            </div>
          </div>
        </div>
        {showCategorySheet && (
          <div
            onMouseLeave={() => setShowCategorySheet(false)}
            onMouseEnter={() => setShowCategorySheet(true)}
            className="categorySheet absolute top-[4.41rem] left-20 right-20 border  "
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>
    </div>
  );
};

export default Navbar;
