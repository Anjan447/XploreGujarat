package com.xploregujarat.springboot.service;

import com.xploregujarat.springboot.DTO.TouristDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;


public interface TouristService {


    ResponseEntity<String> signUp(Map<String, String> requestMap);

    ResponseEntity<String> login(Map<String, String> requestMap);

    ResponseEntity<String> checkToken();

    ResponseEntity<String> forgotPassword(Map<String, String> requestMap);

    public void createTransaction(Double amount);
}
