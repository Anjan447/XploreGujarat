package com.xploregujarat.springboot.DTO;

import com.xploregujarat.springboot.model.UserRole;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TouristDTO {

    private Long id;
    private String name;
    private String mobile;
    private String email;
    private UserRole userRole;

    public TouristDTO(Long id, String name, String mobile, String email, UserRole userRole) {
        this.id = id;
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.userRole = userRole;
    }
}