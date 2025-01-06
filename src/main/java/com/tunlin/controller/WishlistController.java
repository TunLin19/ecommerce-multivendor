package com.tunlin.controller;


import com.tunlin.exceptions.ProductException;
import com.tunlin.modal.Product;
import com.tunlin.modal.User;
import com.tunlin.modal.Wishlist;
import com.tunlin.service.ProductService;
import com.tunlin.service.UserService;
import com.tunlin.service.WishlistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;
    private final UserService userService;
    private final ProductService productService;

    @GetMapping()
    public ResponseEntity<Wishlist> getWishlistByUserId(@RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Wishlist wishlist =wishlistService.getWishlistByUserId(user);
        return ResponseEntity.ok(wishlist);

    }

    @PostMapping("/add-product/{productId}")
    public ResponseEntity<Wishlist> addProductToWishlist(@PathVariable Long productId,
                                                         @RequestHeader("Authorization") String jwt) throws Exception {
        Product product = productService.findProductById(productId);
        User user =  userService.findUserByJwtToken(jwt);
        Wishlist updateWishlist = wishlistService.addProductToWishList(user,product);
        return ResponseEntity.ok(updateWishlist);

    }

}
