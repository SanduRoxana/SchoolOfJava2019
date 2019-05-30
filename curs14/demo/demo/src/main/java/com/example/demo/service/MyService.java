package com.example.demo.service;

import com.example.demo.entity.Person;
import com.example.demo.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MyService {
    private final PersonRepository personRepository;

    @Autowired
    public MyService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> getPeople() {
        return personRepository.findAll();
    }

    public Person saveNewPerson(Person person) {
        return personRepository.save(person);
    }

    public void deletePersonById(int id) {
        personRepository.deleteById(id);
    }
}
