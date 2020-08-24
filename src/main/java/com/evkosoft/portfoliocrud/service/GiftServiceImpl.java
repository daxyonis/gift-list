package com.evkosoft.portfoliocrud.service;

import com.evkosoft.portfoliocrud.model.Gift;
import com.evkosoft.portfoliocrud.service.repository.GiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class GiftServiceImpl implements GiftService {

    @Autowired
    private GiftRepository giftRepository;

    @Override
    public Iterable<Gift> findAll() {
        return giftRepository.findAll();
    }

    @Override
    public Gift findById(Long id) {
        return giftRepository.findById(id).orElse(null);
    }

    @Override
    public Gift update(Gift gift) {
        return giftRepository.save(gift);
    }

    @Override
    public Gift create(Gift gift) {
        Gift newGift = new Gift(null, gift.getDescription(), gift.getGiveTo(), gift.getGiveDate());
        return giftRepository.save(newGift);
    }

    @Override
    public void delete(Long id) {
        giftRepository.deleteById(id);
    }
}
