package com.example.demo2.security;

import com.example.demo2.entities.User;
import com.example.demo2.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class JpaUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User u = userRepository.findUserbyUsername(username);
        if(u == null) throw new UsernameNotFoundException("User has not found");
        return new JpaUserDetails(u); // daca user nu exista se va returna null
    }
}
