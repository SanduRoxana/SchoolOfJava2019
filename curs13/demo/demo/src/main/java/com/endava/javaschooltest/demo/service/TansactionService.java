package com.endava.javaschooltest.demo.service;

import com.endava.javaschooltest.demo.entity.Transaction;
import com.endava.javaschooltest.demo.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TansactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    public void addTransaction(Transaction transaction) {
        if (transaction == null) {
            throw new IllegalArgumentException("Transaction cannot be null!");
        }

        if(transaction.getAmount() < 0) {
            throw  new IllegalArgumentException("Amount cannot be less than 0!");
        }

        transactionRepository.addTransaction(transaction);
    }

    public Transaction getTransactionById(long id) {
        return transactionRepository.getTransactionById(id);
    }
}
