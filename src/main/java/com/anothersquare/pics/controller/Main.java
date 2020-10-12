package com.anothersquare.pics.controller;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.anothersquare.pics.domain.Customer;
import com.anothersquare.pics.service.MainService;



@RestController
@CrossOrigin(origins= {"*"}, maxAge=6000)
public class Main {
	
	@Autowired
	private MainService mainService;
	
	@PostMapping("/login")
	public ResponseEntity getCustomer(@RequestBody Map<String, Object> map) {
		try {
			
			Map<String, Object> params = (Map<String, Object>) map.get("params");
			
			String email=(String) params.get("email");
			Customer cust = mainService.loginCustomer(email);
	
			return new ResponseEntity(cust,HttpStatus.OK);
		
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
	
}
