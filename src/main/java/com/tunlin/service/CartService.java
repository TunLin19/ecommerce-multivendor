package com.tunlin.service;

import com.tunlin.modal.Cart;
import com.tunlin.modal.CartItem;
import com.tunlin.modal.Product;
import com.tunlin.modal.User;

public interface CartService {

    public CartItem addCartItem(User user, Product product, String size, int quantity) throws Exception;
    public Cart findUserCart(User user) throws Exception;
}
