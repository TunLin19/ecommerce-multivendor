package com.tunlin.repository;

import com.tunlin.modal.Cart;
import com.tunlin.modal.CartItem;
import com.tunlin.modal.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {

    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);

}
