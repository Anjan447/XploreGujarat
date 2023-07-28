package com.xploregujarat.springboot.controllerImpl;

import com.xploregujarat.springboot.DTO.TouristDTO;
import com.xploregujarat.springboot.Utils.Constants;
import com.xploregujarat.springboot.Utils.TouristUtils;
import com.xploregujarat.springboot.controller.TouristController;
import com.xploregujarat.springboot.repository.TouristRepository;
import com.xploregujarat.springboot.service.TouristService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class ControllerImpl implements TouristController {

    @Autowired
    TouristService touristService;

    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
        try{
            return touristService.signUp(requestMap);
        } catch (Exception ex){
            ex.printStackTrace();
        }
        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG ,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> login(Map<String, String> requestMap) {
        try{
            return touristService.login(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG ,HttpStatus.INTERNAL_SERVER_ERROR);

    }

//    @Override
//    public ResponseEntity<List<TouristDTO>> getAllTourists() {
//        try{
//            return touristService.getAllTourists();
//        }catch (Exception ex){
//            ex.printStackTrace();
//        }
//        return new ResponseEntity<List<TouristDTO>>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
//    }

//    @Override
//    public ResponseEntity<String> update(Map<String, String> requestMap) {
//        try{
//            return touristService.update(requestMap);
//        }catch (Exception ex){
//            ex.printStackTrace();
//        }
//        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
//    }

    @Override
    public ResponseEntity<String> checkToken() {
        try {
            return touristService.checkToken();
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }



    public ResponseEntity<String> forgotPassword(Map<String, String> requestMap) {
        try {
            return touristService.forgotPassword(requestMap);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public void createTransaction(Double amount){ //@PathVariable(name = "amount")

    }


}