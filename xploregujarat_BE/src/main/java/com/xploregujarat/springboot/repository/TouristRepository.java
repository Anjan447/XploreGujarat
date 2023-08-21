package com.xploregujarat.springboot.repository;

import com.xploregujarat.springboot.model.Tourist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@EnableJpaRepositories
@Repository
public interface TouristRepository extends JpaRepository<Tourist, Long> {

    Tourist findByEmail(String email);

}