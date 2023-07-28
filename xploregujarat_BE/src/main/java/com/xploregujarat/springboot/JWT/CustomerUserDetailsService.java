package com.xploregujarat.springboot.JWT;

import com.xploregujarat.springboot.model.Tourist;
import com.xploregujarat.springboot.repository.TouristRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomerUserDetailsService implements UserDetailsService {

    @Autowired
    private final TouristRepository touristRepository;
    private Tourist tourist;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("Inside loadUserByUsername{}", username);
        tourist = touristRepository.findByEmailId(username);
        if (!Objects.isNull(tourist))
            return new User(tourist.getEmail(), tourist.getPassword() //org.springframework.security.core.userdetails.User
                    , new ArrayList<>());
        else
            throw new UsernameNotFoundException("User not found");
    }

    public Tourist getTouristDetails() {
        return tourist;
    }
}