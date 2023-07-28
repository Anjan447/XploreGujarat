package com.xploregujarat.springboot.DTO;

import lombok.Data;

@Data
public class AuthResponseDTO {
    private String jwtToken;

    public AuthResponseDTO(String jwt) {
    }
}
