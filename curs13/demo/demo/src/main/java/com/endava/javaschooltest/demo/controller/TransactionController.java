package com.endava.javaschooltest.demo.controller;

import com.endava.javaschooltest.demo.entity.Transaction;
import com.endava.javaschooltest.demo.service.TansactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TransactionController {

    @Autowired
    TansactionService tansactionService;

    @RequestMapping(path = "/test", method = RequestMethod.GET)
    private String testEndpoint() {
        return "I'm ok";
    }

    @RequestMapping(path = "/add/transaction", method = RequestMethod.POST)
    private void addTransaction(@RequestBody Transaction transaction) {
        tansactionService.addTransaction(transaction);
    }
}
