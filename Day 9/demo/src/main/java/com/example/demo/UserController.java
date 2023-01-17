package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/messages")
public class UserController {
    @GetMapping()
    public String getMessages(){
        return "HTTP GET request Hello World";
    }
    @PostMapping()
    public String createMessages(){
        return "HTTP POST request Hello World";
    }
    @DeleteMapping()
    public String deleteMessages(){
        return "HTTP DELETE request Hello World";
    }
}
