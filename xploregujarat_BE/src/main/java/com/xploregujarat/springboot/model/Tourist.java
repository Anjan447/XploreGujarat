package com.xploregujarat.springboot.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "tourist", uniqueConstraints = {@UniqueConstraint(columnNames = "email")})
public class Tourist implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "tourist_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "mobile", unique = true)
    private String mobile;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(nullable = false)
    private UserRole userRole;
//    @Column(nullable = false)
//    private String status;
//
//    @Column(nullable = false)
//    private String role;

}