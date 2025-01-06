package com.tunlin.service;

import com.tunlin.modal.Order;
import com.tunlin.modal.Seller;
import com.tunlin.modal.Transaction;

import java.util.List;

public interface TransactionService {
    Transaction createTransaction(Order order);
    List<Transaction> getTransactionBySellerId(Seller seller);
    List<Transaction> getAllTransaction();
}
