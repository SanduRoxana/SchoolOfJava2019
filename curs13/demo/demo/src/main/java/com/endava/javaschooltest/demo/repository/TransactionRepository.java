package com.endava.javaschooltest.demo.repository;

import com.endava.javaschooltest.demo.entity.Transaction;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Repository
public class TransactionRepository {

    List<Transaction> transactionList = new ArrayList<>();

    public void addTransaction(Transaction transaction) {
        transactionList.add(transaction);
    }

    public Transaction getTransactionById(long id) {
        for(Transaction transaction : transactionList) {
            if(transaction.getId() == id) {
                return transaction;
            }
        }
        return null;
    }
}
