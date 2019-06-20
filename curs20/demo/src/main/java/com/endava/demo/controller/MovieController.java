package com.endava.demo.controller;

import com.endava.demo.model.Movie;
import com.endava.demo.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;

@RestController
public class MovieController {

    @Autowired
    private MovieService movieService;

    @Autowired
    private RestTemplate restTemplate;

    private

    @PostMapping(value = "/")
    public int add(@RequestParam String title, @RequestParam String genre) {
        return movieService.add(title, genre);
    }

    @PostMapping(value = "/add")
    public String addMovie(@RequestBody Movie movie, HttpServletResponse response) { //response il injecteaza spring
        response.setStatus(HttpServletResponse.SC_CREATED);
        return movie.getTitle();
    }

    //retreive
    //TODO get by id
    //TODO get all

    //update
    //TODO adaugam la model rating
    //update rating-ul

    //delete

    @DeleteMapping(value = "/{id}") // calea poate fi aceeasi
    public int delete(@PathVariable int id) {
        return movieService.delete(id);
    }

    @GetMapping(value = "/")
    public void callRest() {
        String url = "http://localhost:8080/1";
        restTemplate.delete("");
    }
}
