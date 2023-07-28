package com.xploregujarat.springboot.repository;

import com.xploregujarat.springboot.DTO.TouristDTO;
import com.xploregujarat.springboot.model.Tourist;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface TouristRepository extends JpaRepository<Tourist, Long> {
    Tourist findByEmailId(@Param("email") String email);

    List<TouristDTO> getAllTourists();

    Tourist findByEmail(String email);

    //Boolean existsByEmail(String email);
}