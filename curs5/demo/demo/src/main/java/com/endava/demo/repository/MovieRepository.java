package com.endava.demo.repository;

import org.springframework.stereotype.Repository;

@Repository
public class MovieRepository {

//    @Autowired
//    private JdbcTemplate jdbcTemplate;
//
//    public int add(Movie movie) {
//        int id = 0;
//        if(getMaxId() != NULL) {
//            id = getMaxId();
//        }
//
//        movie.setId(id);
//
//        String query = "INSERT into movie values (?, ?, ?)";
//
//        return jdbcTemplate.update(query, movie.getId(), movie.getTitle(), movie.getGenre());
//    }
//
//    private int getMaxId() {
//        String query = "SELECT max(id) from movie";
//        return jdbcTemplate.queryForObject(query, Integer.class);
//    }
//
//    public int delete(int id) {
//        String query = "DELETE from movie where id=?";
//        return jdbcTemplate.update(query, id);
//    }
}
