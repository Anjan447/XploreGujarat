package com.xploregujarat.springboot.serviceImpl;
import com.google.common.base.Strings;
import com.xploregujarat.springboot.DTO.AuthRequestDTO;
import com.xploregujarat.springboot.DTO.AuthResponseDTO;
import com.xploregujarat.springboot.DTO.TouristDTO;
import com.xploregujarat.springboot.JWT.CustomerUserDetailsService;
import com.xploregujarat.springboot.JWT.JwtFilter;
import com.xploregujarat.springboot.JWT.JwtUtils;
import com.xploregujarat.springboot.Utils.Constants;
import com.xploregujarat.springboot.Utils.EmailUtils;
import com.xploregujarat.springboot.Utils.TouristUtils;
import com.xploregujarat.springboot.model.UserRole;
import com.xploregujarat.springboot.repository.TouristRepository;
import com.xploregujarat.springboot.model.Tourist;
import com.xploregujarat.springboot.service.TouristService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;


@Slf4j
@Service
public class TouristServiceImpl implements TouristService {

    @Autowired
    private TouristRepository touristRepository;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    CustomerUserDetailsService customerUserDetailsService;

    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    EmailUtils emailUtils;

    @Autowired
    JwtFilter jwtFilter;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<String> signUp(Map<String, String> requestMap) {
        log.info("Inside signup {}", requestMap);
        try {
            if (validateSignUpMap(requestMap)) {
                Tourist tourist = touristRepository.findByEmail(requestMap.get("email"));
                if (Objects.isNull(tourist)) {
                    touristRepository.save(getTouristFromMap(requestMap));
                    return TouristUtils.getResponseEntity("SignUp was Successful", HttpStatus.OK);
                } else {
                    return TouristUtils.getResponseEntity("Email Already Exists.", HttpStatus.BAD_REQUEST);
                }
            } else {
                return TouristUtils.getResponseEntity(Constants.INVALID_DATA, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }


    private boolean validateSignUpMap(Map<String, String> requestMap){
       if (requestMap.containsKey("name") && requestMap.containsKey("mobile") && requestMap.containsKey("email") && requestMap.containsKey("password")) {
           return true;
       }
       return false;
    }

    private Tourist getTouristFromMap(Map<String, String> requestMap){
        Tourist tourist = new Tourist();
        tourist.setName(requestMap.get("name"));
        tourist.setMobile(requestMap.get("mobile"));
        tourist.setEmail(requestMap.get("email"));
//        tourist.setPassword(requestMap.get("password"));
        tourist.setUserRole(UserRole.USER);
        tourist.setPassword(passwordEncoder.encode(requestMap.get("password")));
//        tourist.setStatus("false");
//        tourist.setRole("tourist");
        return tourist;
    }

    @Override
    public ResponseEntity<String> login(Map<String, String> requestMap) {
        log.info("Inside Login");
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(requestMap.get("email"),requestMap.get("password")));
            return  new ResponseEntity<String>("{\"token\":\""+
                      jwtUtils.generateToken(customerUserDetailsService.getTouristDetails().getEmail())+"\"}", HttpStatus.OK);
            }catch (Exception exception){
                log.error("{}",exception);
            }
            return new ResponseEntity<String>("{\"message\":\""+"Bad credentials"+"\"}",HttpStatus.BAD_REQUEST);
    }


//    @Override
//    public ResponseEntity<List<TouristDTO>> getAllTourists() {
//       try {
//            if(jwtFilter.isAdmin()){
//                return new ResponseEntity<>(touristRepository.getAllTourists(), HttpStatus.OK);
//            } else {
//                return  new ResponseEntity<>(new ArrayList<>(), HttpStatus.UNAUTHORIZED);
//            }
//       }catch (Exception ex){
//           ex.printStackTrace();
//       }
//       return  new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
//    }

//    @Override
//    public ResponseEntity<String> update(Map<String, String> requestMap) {
//        try {
//            if(jwtFilter.isAdmin()){
//                Optional<Tourist> optional = touristRepository.findById(Long.parseLong(requestMap.get("id")));
//                if (!optional.isEmpty()){
//                    touristRepository.updateStatus(requestMap.get("status"), Long.parseLong(requestMap.get("id")));
//
//                    return TouristUtils.getResponseEntity("Tourist Status Updated Successfully", HttpStatus.OK);
//                }else {
//                    return TouristUtils.getResponseEntity("Tourist ID doesn't exist", HttpStatus.OK);
//                }
//            } else {
//                return TouristUtils.getResponseEntity(Constants.UNAUTHORISED_ACCESS, HttpStatus.UNAUTHORIZED);
//            }
//        }catch (Exception ex){
//            ex.printStackTrace();
//        }
//        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
//    }

    @Override
    public ResponseEntity<String> checkToken() {
        return TouristUtils.getResponseEntity("true", HttpStatus.OK);
    }
    @Override
    public ResponseEntity<String> forgotPassword(Map<String, String> requestMap) {
        try{
            Tourist touristObj = touristRepository.findByEmail(requestMap.get("email"));
            if (touristObj != null && !Strings.isNullOrEmpty(touristObj.getEmail())){
                emailUtils.forgotMail(touristObj.getEmail(),"Credentials by XploreGujarat Management Team.", touristObj.getPassword());
            }
            return TouristUtils.getResponseEntity("Check Your Mail For Credentials", HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return TouristUtils.getResponseEntity(Constants.SOMETHING_WENT_WRONG, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public void createTransaction(Double amount) {

        //amount

        //currency
        //key
        //secretkey
    }
}