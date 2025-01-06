package com.tunlin.controller;

import com.tunlin.modal.Deal;
import com.tunlin.response.ApiResponse;
import com.tunlin.service.DealService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/deals")
public class DealController {

    private final DealService dealService;

    @PostMapping
    public ResponseEntity<Deal> createDeal(@RequestBody Deal deal){
        Deal createDeal = dealService.createDeal(deal);
        return new ResponseEntity<>(createDeal, HttpStatus.ACCEPTED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Deal> updateDeal(@RequestBody Deal deal,
                                           @PathVariable Long id) throws Exception {
        Deal updateDeal = dealService.updateDeal(deal,id);
        return new ResponseEntity<>(updateDeal, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteDeal(@PathVariable Long id) throws Exception {
        dealService.deleteDeal(id);
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setMessage("Delete deal successfully");
        return new ResponseEntity<>(apiResponse, HttpStatus.ACCEPTED);
    }

}
