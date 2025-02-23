import { AddPhotoAlternate} from "@mui/icons-material";
import { CircularProgress,  Grid2,  IconButton } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";

const AddProduct = () => {
  const [uploadImage, setUploadImage] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: "",
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    setUploadImage(true);
    setUploadImage(false);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter((child: any) => {
      return child.parentCategoryId === parentCategoryId;
    });
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
        <Grid2 container spacing={2}>
          <Grid2 className="flex flex-wrap gap-5 " size={{ xs: 12 }}>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label className="relative" htmlFor="fileInput">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                <AddPhotoAlternate className="ring-gray-700" />
              </span>
              {uploadImage && (
                <div className="absolute top-0 left-0 right-0 bottom-0 w-24 h-24  flex items-center justify-center">
                  <CircularProgress />
                </div>
              )}
            </label>
            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <div className="relative">
                  <img
                    src={image}
                    key={index}
                    className="w-24 h-24 object-cover"
                    alt={`ProductImage ${index+1}`}
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 cursor-pointer"
                    
                  />
                  
                </div>
              ))}
            </div>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
};

export default AddProduct;
