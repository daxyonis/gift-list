package com.evkosoft.portfoliocrud.service;

import com.evkosoft.portfoliocrud.model.Gift;
import com.evkosoft.portfoliocrud.service.repository.GiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GiftServiceImpl implements GiftService {

    @Autowired
    private GiftRepository giftRepository;

    @Override
    public Iterable<Gift> findAll() {
        return giftRepository.findAllByOrderByGiveDate();
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
    public void deleteAll() {
        giftRepository.deleteAll();
    }

    @Override
    public Gift create(Gift gift) {
        Gift newGift = new Gift(null, gift.getDescription(), gift.getGiveTo(), gift.getGiveDate(), false);
        return giftRepository.save(newGift);
    }

    @Override
    public void delete(Long id) {
        giftRepository.deleteById(id);
    }
}
