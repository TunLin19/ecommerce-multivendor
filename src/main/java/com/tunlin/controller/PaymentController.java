package com.tunlin.controller;

import com.tunlin.modal.*;
import com.tunlin.response.ApiResponse;
import com.tunlin.response.PaymentLinkResponse;
import com.tunlin.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    private final PaymentService paymentService;
    private final UserService userService;
    private final SellerReportService sellerReportService;
    private final OrderService orderService;
    private final SellerService sellerService;
    private final TransactionService transactionService;


    @GetMapping("/api/payment/{paymentId}")
    public ResponseEntity<ApiResponse> paymentSuccessHandler(@PathVariable String paymentId,
                                                             @RequestParam String paymentLinkId,
                                                             @RequestHeader("Authorization")String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        PaymentLinkResponse paymentLinkResponse ;

        PaymentOrder paymentOrder = paymentService.getPaymentOrderByPaymentId(paymentId);
        boolean paymentSuccess = paymentService.proceedPaymentOrder(paymentOrder,paymentId,paymentLinkId);
        
        if (paymentSuccess){
            for (Order order : paymentOrder.getOrders()) {
                transactionService.createTransaction(order);
                Seller seller = sellerService.getSellerById(order.getSellerId());
                SellerReport sellerReport = sellerReportService.getSellerReport(seller);
                sellerReport.setTotalOrders(sellerReport.getTotalOrders()+1);
                sellerReport.setTotalEarnings(sellerReport.getTotalEarnings()+order.getTotalSellingPrice());
                sellerReport.setTotalSales(sellerReport.getTotalSales()+order.getOrderItems().size());
                sellerReportService.updateSellerReport(sellerReport);
            }
        }
        ApiResponse res = new ApiResponse();
        res.setMessage("Payment successfully");
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

}
