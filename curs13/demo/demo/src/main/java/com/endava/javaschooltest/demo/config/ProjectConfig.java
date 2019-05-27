package com.endava.javaschooltest.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ProjectConfig {

    @Bean
    public RestTemplate restTemplate() { // RestTemplate -> facem call-uri catre endpoint uri rest
        return new RestTemplate();
    }
}
