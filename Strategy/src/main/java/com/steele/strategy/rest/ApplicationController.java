package com.steele.strategy.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public class ApplicationController {

    public String index() {
        return "Greetings from Spring Boot! Also actuator <a href='info'>info</a>'";
    }

}
