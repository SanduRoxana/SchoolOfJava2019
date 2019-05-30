package com.example.demo.controller;

import com.example.demo.entity.Person;
import com.example.demo.service.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MyController {

    private final MyService myService;

    @Autowired
    public MyController(MyService myService) {
        this.myService = myService;
    }

    @GetMapping("/getPeople")
    public ResponseEntity<List<Person>> getPeople() { // poti sa returnezi un ResponseEntity
        return ResponseEntity.ok(myService.getPeople());
    }

    @PostMapping("/addNewPerson")
    public Person addNewPerson(@RequestBody Person person) {
        return myService.saveNewPerson(person);
    }

    @DeleteMapping("/deletePersonById/{id}")
    public void deletePerson(@PathVariable int id) {
        myService.deletePersonById(id);
    }
}
