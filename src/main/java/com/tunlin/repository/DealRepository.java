package com.tunlin.repository;

import com.tunlin.modal.Deal;
import com.tunlin.modal.Home;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DealRepository extends JpaRepository<Deal,Long> {
}
