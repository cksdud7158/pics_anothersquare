package com.anothersquare.pics.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.anothersquare.pics.domain.Customer;
import com.anothersquare.pics.domain.Reserve;
import com.anothersquare.pics.domain.Studio;
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
	
	@GetMapping("/studio/{name}")
	public ResponseEntity getStudio(@PathVariable String name) {
		try {
			
			Studio st= mainService.getStudio(name);
			
	
			return new ResponseEntity(st,HttpStatus.OK);
		
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/studios")
	public ResponseEntity getStudios() {
		try {
			
			List list = mainService.getStudios();
			
	
			return new ResponseEntity(list,HttpStatus.OK);
		
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/reserve/{name}")
	public ResponseEntity getReserve(@PathVariable String name) {
		try {
			Reserve re= mainService.getReserve(name);
			
	
			return new ResponseEntity(re,HttpStatus.OK);
		
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
	
}
