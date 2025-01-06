package com.tunlin.service;

import com.tunlin.modal.Product;
import com.tunlin.modal.User;
import com.tunlin.modal.Wishlist;

public interface WishlistService {
    Wishlist createWishlist(User user);
    Wishlist getWishlistByUserId(User user);
    Wishlist addProductToWishList(User user, Product product);
}
