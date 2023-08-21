package com.xploregujarat.springboot.Controller;

import com.xploregujarat.springboot.DTO.AuthRequestDTO;
import com.xploregujarat.springboot.DTO.AuthResponseDTO;
import com.xploregujarat.springboot.JWT.JwtUtils;
import com.xploregujarat.springboot.model.Tourist;
import com.xploregujarat.springboot.repository.TouristRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/tourists/")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private TouristRepository touristRepository;

    @Autowired
    private JwtUtils jwtUtils;

    public AuthResponseDTO createAuthenticationToken(@RequestBody AuthRequestDTO authDTO, HttpServletResponse response) throws BadCredentialsException,DisabledException, UsernameNotFoundException,IOException {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authDTO.getUsername(), authDTO.getPassword()));
        }catch (BadCredentialsException ex){
            throw new BadCredentialsException("Incorrect Username or Password");
        }catch (DisabledException disabledException){
            response.sendError(HttpServletResponse.SC_NOT_ACCEPTABLE, "User is not Present with such credentials.");
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authDTO.getUsername());
        Tourist tourist = touristRepository.findByEmail(authDTO.getUsername());
        final String jwt = jwtUtils.generateToken(authDTO.getUsername());
        return new AuthResponseDTO(jwt);

    }
}
