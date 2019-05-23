package com.example.demo1.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;

import java.util.Arrays;
import java.util.Collection;

@Configuration
public class ProjectConfig extends WebSecurityConfigurerAdapter {

    @Bean // cu bean ajunge sa fie managenuit de context spring
    public PasswordEncoder passwordEncoder() {
//        return new PasswordEncoder() {
//            @Override
//            public String encode(CharSequence charSequence) {
//                return charSequence.toString();
//            }
//
//            @Override
//            public boolean matches(CharSequence charSequence, String s) {
//                return charSequence.equals(s);
//            }
//        };

        return NoOpPasswordEncoder.getInstance(); // fac aclasi lucru ca mai sus


    }

    @Bean
    public UserDetailsService userDetailsServiceBean() {
        UserDetailsManager us = new InMemoryUserDetailsManager(); // inlocuieste ce am scris mai jos

        UserDetails user1 = User.withUsername("bill")
                .password("12345")
                .authorities("ADMIN")
                .build();

        UserDetails user2 = User.withUsername("bill")
                .password("12345")
                .authorities("MANAGER")
                .build();

        us.createUser(user1);
        us.createUser(user2); // am creat 2 useri

//        UserDetails u = new UserDetails() {
//            @Override
//            public Collection<? extends GrantedAuthority> getAuthorities() { // GranteAuthority este o interfata
////                GrantedAuthority a = new GrantedAuthority() {
////                    @Override
////                    public String getAuthority() {
////                        return "admin";
////                    }
////                }
//
//                return Arrays.asList( () -> "admin" ); // pt scrierea mai simpla a unui tip anonim pe a elimina boilerplte code-ul
//            }
//
//            @Override
//            public String getPassword() {
//                return "12345";
//            }
//
//            @Override
//            public String getUsername() {
//                return "bill";
//            }
//
//            @Override
//            public boolean isAccountNonExpired() {
//                return true;
//            }
//
//            @Override
//            public boolean isAccountNonLocked() {
//                return true;
//            }
//
//            @Override
//            public boolean isCredentialsNonExpired() {
//                return true;
//            }
//
//            @Override
//            public boolean isEnabled() {
//                return true;
//            }
//        };
//
//        UserDetailsService us = username -> u;

        return us;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception { // cum facem autorizarea si ce endpoint uri securizam
        //ANT /hello or /hello* or /hello/** or /helllo/*/** or /*/hello/**
        // /*hello/** --> /abcd/hello/orice/orice/orice/orice

        http.httpBasic(); // punem un user si o parola si putem sa accesam sau nu
//        http.authorizeRequests().anyRequest().permitAll(); // cui ii permitem // permit fara autentificare // pe cine autorizez si cu ce rol
//        http.authorizeRequests().anyRequest().authenticated();
//        http.authorizeRequests()
//                .antMatchers("/hello").authenticated() // mai este si nvcmatchers si regexmatchers // pot sa pui mai multe in paranteza
//                .anyRequest().permitAll();

        http.authorizeRequests()
                .antMatchers("/hello").access("hasAuthority('ADMIN')") // pe hello il apeleaza doar userul ADMIN
                .anyRequest().permitAll();
    }
}
