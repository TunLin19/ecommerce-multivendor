package com.tunlin.service;

import com.tunlin.modal.Home;
import com.tunlin.modal.HomeCategory;

import java.util.List;

public interface HomeService {

    Home createHomePageData(List<HomeCategory> allCategories);

}
