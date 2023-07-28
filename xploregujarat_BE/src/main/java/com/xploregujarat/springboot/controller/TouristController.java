package com.xploregujarat.springboot.controller;

import com.xploregujarat.springboot.DTO.TouristDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RequestMapping(path = "/tourists")
@CrossOrigin(origins = "*")
public interface TouristController{

    @PostMapping(path = "/signup")
    public ResponseEntity<String> signUp(@RequestBody(required = true)Map<String,String> requestMap);

    @PostMapping(path = "/login")
    public ResponseEntity<String> login(@RequestBody(required = true)Map<String,String> requestMap);

    //Get info of all Tourists
//    @GetMapping(path = "/listall")
//    public ResponseEntity<List<TouristDTO>> getAllTourists();

//    @PostMapping(path = "/update")
//    public ResponseEntity<String> update(@RequestBody(required = true)Map<String,String> requestMap);

    @GetMapping(path = "/checktoken")
    ResponseEntity<String> checkToken();

    @PostMapping("/forgotpassword")
    ResponseEntity<String> forgotPassword(@RequestBody Map<String,String> requestMap);

    @GetMapping({"/createtransaction/{amount}"})
    public void createTransaction(@PathVariable(name = "amount") Double amount);


}
