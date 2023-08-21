package com.xploregujarat.springboot.Controller;

import com.xploregujarat.springboot.Utils.Constants;
import com.xploregujarat.springboot.Utils.TouristUtils;
import com.xploregujarat.springboot.service.TouristService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(path = "/tourists")
@CrossOrigin(origins = "*")
public class Controller{

    @Autowired
    TouristService touristService;

    @PostMapping(path = "/signup")
    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
        try{
            return touristService.signUp(requestMap);
        } catch (Exception ex){
            ex.printStackTrace();
        }
        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG ,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<String> login(Map<String, String> requestMap) {
        try{
            return touristService.login(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG ,HttpStatus.INTERNAL_SERVER_ERROR);

    }


    @GetMapping(path = "/checkToken")
    public ResponseEntity<String> checkToken() {
        try {
            return touristService.checkToken();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @PostMapping("/forgotPassword")
    public ResponseEntity<String> forgotPassword(Map<String, String> requestMap) {
        try {
            return touristService.forgotPassword(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping({"/createTransaction/{amount}"})
    public void createTransaction(Double amount){ //@PathVariable(name = "amount")

    }


}