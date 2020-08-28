package com.evkosoft.portfoliocrud.service;

import com.evkosoft.portfoliocrud.model.Gift;

import java.time.LocalDate;
import java.util.Optional;

public interface GiftService {

    Iterable<Gift> findAll();

    Gift findById(Long id);

    Gift create(Gift gift);

    void delete(Long id);

    Gift update(Gift gift);

    void deleteAll();
}
