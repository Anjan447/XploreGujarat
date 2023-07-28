package com.xploregujarat.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
//@EnableJpaAuditing
public class XploregujaratBeApplication {

	public static void main(String[] args) {
		SpringApplication.run(XploregujaratBeApplication.class, args);
	}

}
