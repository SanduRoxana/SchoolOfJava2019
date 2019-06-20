package com.endava.demo.controller;

import com.endava.demo.model.Movie;
import com.endava.demo.service.MovieService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/movies")
public class MovieController implements InitializingBean {

    private List<Movie> movieList = new ArrayList<>();

//    @Autowired
//    private MovieService movieService;
//
//    @Autowired
//    private RestTemplate restTemplate;

    //CRUD

    //create

    //RequestBody - toate in afara de get
    //RequestParam - in url punem parametrii pe care ii trimitem
    //PathVariable

    //@RequestMapping(value = "/", method = RequestMethod.POST)
//    @PostMapping(value = "/")
//    public int add(@RequestParam String title, @RequestParam String genre) {
//        return movieService.add(title, genre);
//    }

//    @PostMapping(value = "/add")
//    public String addMovie(@RequestBody Movie movie, HttpServletResponse response) { //response il injecteaza spring
//        response.setStatus(HttpServletResponse.SC_CREATED);
//        return movie.getTitle();
//    }

    //retreive
    //TODO get by id
    //TODO get all

    //update
    //TODO adaugam la model rating
    //update rating-ul

    //delete

//    @DeleteMapping(value = "/{id}") // calea poate fi aceeasi
//    public int delete(@PathVariable int id) {
//        return movieService.delete(id);
//    }

//    @GetMapping(value = "/")
//    public void callRest() {
//        String url = "http://localhost:8080/1";
//        restTemplate.delete("");
//    }

    @Override
    public void afterPropertiesSet() throws Exception {
        for(int i = 1; i < 15; i++) {
            Movie movie = new Movie();
            movie.setId(i);
            movie.setTitle("Title: " + i);
            movie.setGenre("Genre: " + i);
            this.movieList.add(movie);
        }
    }

    @GetMapping(value = "/")
    public ResponseEntity<List<Movie>> getAllMovies() {
        return ResponseEntity.ok(this.movieList);
    }

    @PostMapping(value = "/")
    public ResponseEntity<Movie> add(@RequestParam String title, @RequestParam String genre) {
        Movie movie = new Movie();
        Integer latestId = movieList.stream()
                .map(movie1 -> movie.getId())
                .reduce((integer, integer2) -> integer >= integer2 ? integer : integer2).get();
        movie.setId(latestId);
        movie.setTitle(title);
        movie.setGenre(genre);
        movieList.add(movie);
        return ResponseEntity.ok(movie);
    }

    @PostMapping(value = "/addMovie", consumes = "application/json")
    public ResponseEntity<String> add(@RequestBody Movie movie) {
        this.movieList.add(movie);
        return ResponseEntity.ok("Successfully added!");
    }

    @DeleteMapping(value = "/{id}") // calea poate fi aceeasi
    public ResponseEntity<Void> delete(@PathVariable int id) {
        this.movieList = this.movieList
                .stream()
                .filter(movie -> movie.getId() != id)
                .collect(Collectors.toList());
        return ResponseEntity.ok().build();
    }

}
