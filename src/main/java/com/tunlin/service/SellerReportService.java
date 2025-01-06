package com.tunlin.service;

import com.tunlin.modal.Seller;
import com.tunlin.modal.SellerReport;

public interface SellerReportService {

    SellerReport getSellerReport(Seller seller);
    SellerReport updateSellerReport(SellerReport sellerReport);

}
