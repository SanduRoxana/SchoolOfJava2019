package com.endava.javaschooltest.demo.service;

import com.endava.javaschooltest.demo.entity.Transaction;
import com.endava.javaschooltest.demo.repository.TransactionRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.*;

@RunWith(MockitoJUnitRunner.class)
public class TansactionServiceTest {

    public static final long ID = 100L;
    @InjectMocks
    private TansactionService transactionService;

    @Mock
    private TransactionRepository transactionRepository; // nu este o instanta reala

    Transaction transaction;

    @Before
    public void setUp() { // se apeleaza inainte fiecarui test -> mereu avem un obiect nou
        transaction = new Transaction();
        transaction.setId(ID);
        transaction.setAmount(300.0);
        transaction.setName("John");
    }

    @Test
    public void testAddTransaction() {
        Transaction transaction = new Transaction();
        transaction.setId(100L);
        transaction.setAmount(300.0);
        transaction.setName("John");

        transactionService.addTransaction(transaction);

        Mockito.verify(transactionRepository, Mockito.times(1)).addTransaction(transaction);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddTransactionWhenInputIsNullThrowAnException() {
        transactionService.addTransaction(null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testAddTransactionWhenInputIsInvalidThrowAnException() {
        Transaction transaction = new Transaction();
        transaction.setId(100L);
        transaction.setAmount(-300.0);
        transaction.setName("John");

        transactionService.addTransaction(transaction);
    }

    @Test
    public void testGetTransaction() {
        Mockito.when(transactionRepository.getTransactionById(ID))
                .thenReturn(transaction);

        Transaction actualTransaction = transactionService.getTransactionById(ID);

        assertEquals(transaction.getId(), actualTransaction.getId());
        assertEquals(transaction.getAmount(), actualTransaction.getAmount(), 10.02);
        assertEquals(transaction.getName(), actualTransaction.getName());
    }
}