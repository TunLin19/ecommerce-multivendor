package com.tunlin.service;

import com.razorpay.PaymentLink;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;
import com.tunlin.modal.Order;
import com.tunlin.modal.PaymentOrder;
import com.tunlin.modal.User;

import java.util.Set;

public interface PaymentService {
    PaymentOrder createOrder (User user, Set<Order> orders);
    PaymentOrder getPaymentOrderById(Long orderId) throws Exception;
    PaymentOrder getPaymentOrderByPaymentId(String paymentId) throws Exception;
    Boolean proceedPaymentOrder (PaymentOrder paymentOrder,
                                  String paymentId,
                                  String paymentLinkId) throws RazorpayException;
    PaymentLink createRazorpayPaymentLink (User user, Long amount, Long orderId) throws RazorpayException;
    String createStripePaymentLink (User user, Long amount, Long orderId) throws StripeException;
}
