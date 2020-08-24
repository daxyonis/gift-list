package com.evkosoft.portfoliocrud.controller;

import com.evkosoft.portfoliocrud.model.Gift;
import com.evkosoft.portfoliocrud.service.GiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/gift")
public class GftController {

    @Autowired
    private GiftService giftService;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Gift> findAll(){
        return giftService.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Gift create(@RequestBody Gift gift){
        return giftService.create(gift);
    }

    @RequestMapping(value="/{id}", method = RequestMethod.GET)
    public Gift findOne(@PathVariable Long id){
        return giftService.findById(id);
    }

    @RequestMapping(value="/{id}", method = RequestMethod.POST)
    public Gift update(@RequestBody Gift gift){
        return giftService.update(gift);
    }

    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public String delete(@PathVariable Long id){
        giftService.delete(id);
        return "OK";
    }
}
