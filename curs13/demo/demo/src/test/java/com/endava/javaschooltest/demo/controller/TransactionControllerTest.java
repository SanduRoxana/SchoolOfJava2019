package com.endava.javaschooltest.demo.controller;

import com.endava.javaschooltest.demo.DemoApplication;
import com.endava.javaschooltest.demo.entity.Transaction;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class) // pentru a nu mai deschide serverul separat
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT, classes = DemoApplication.class)
public class TransactionControllerTest {

    @MockBean // mock pt teste unitare; mockbean -> face mockuirea tuturor metodelor din spring??
    private RestTemplate restTemplate;

    @MockBean
    private TransactionController transactionController;

    public static final long ID = 100L;

    Transaction transaction;

    @Before
    public void setUp() { // se apeleaza inainte fiecarui test -> mereu avem un obiect nou
        transaction = new Transaction();
        transaction.setId(ID);
        transaction.setAmount(300.0);
        transaction.setName("John");
    }

    @Test
    public void testEndpointTest() {
        String url = "http://localhost:8080/test";

        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, null, String.class);

        assertNotNull(responseEntity);
    }

    @Test
    public void addTransaction(Transaction transaction) {
        String url = "http://localhost:8080/add/transaction";



        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", "123456");

        HttpEntity<Transaction> entity = new HttpEntity<>(transaction, httpHeaders);

        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

    }
}