package com.evkosoft.portfoliocrud.service.repository;

import com.evkosoft.portfoliocrud.model.Gift;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GiftRepository extends JpaRepository<Gift,Long> {
    Iterable<Gift> findAllByOrderByGiveDate();
}
