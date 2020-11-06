package com.anothersquare.pics.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
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
	
	@GetMapping("/reserve/{name}/{date}")
	public ResponseEntity getReserve(@PathVariable String name,@PathVariable String date) {
		try {
			System.out.println("일 호출우우우우울~!");			
			Reserve tempRe = new Reserve();
			tempRe.setName(name);
			tempRe.setDate(date);
			Reserve re= mainService.getReserve(tempRe);
			
			
			return new ResponseEntity(re,HttpStatus.OK);
		
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/allReserve")
	public ResponseEntity getAllReserve() {
		try {
			
			List list = mainService.getAllReserve();
			
			return new ResponseEntity(list,HttpStatus.OK);
		
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity registerUser(@RequestBody Map<String, Object> map) {
		try {
			
			Map<String, Object> params = (Map<String, Object>) map.get("params");
			
			Map<String, Object> customer = (Map<String, Object>) params.get("registerInfo");
			
			Customer cs = new Customer();
			cs.setEmail((String) customer.get("email"));
			cs.setPassword((String) customer.get("password"));
			cs.setName((String) customer.get("name"));
			cs.setContact((String) customer.get("contact"));
			cs.setGender((String) customer.get("gender"));
			
			mainService.registerCustomer(cs);			
	
			return new ResponseEntity(HttpStatus.OK);
		
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
	
	@DeleteMapping("/reserveDelete/{name}/{date}")
	public ResponseEntity deleteReserve(@PathVariable String name, @PathVariable String date) {
		try {
			
			Reserve re = new Reserve();
			re.setName(name);
			re.setDate(date);
			
			mainService.deleteReserve(re);
			
			return new ResponseEntity(HttpStatus.OK);
		
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PatchMapping("/registerReview")
	public ResponseEntity registerReview(@RequestBody Map<String, Object> map) {
		try {
			
			Map<String, Object> params = (Map<String, Object>) map.get("params");
			
			Map<String, Object> studioInfo = (Map<String, Object>) params.get("studioInfo");
			
			Reserve re = new Reserve();
			re.setDate((String) studioInfo.get("date"));
			re.setName((String)studioInfo.get("name"));
			re.setRating((int)studioInfo.get("rating"));
			re.setReview((String)studioInfo.get("review"));
			
			
			mainService.registerReview(re);			
	
			return new ResponseEntity(HttpStatus.OK);
		
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
	@PostMapping("/reserveStudio")
	public ResponseEntity reserveStudio(@RequestBody Map<String, Object> map) {
		try {
			
			Map<String, Object> params = (Map<String, Object>) map.get("params");
			
			Map<String, Object> reserve = (Map<String, Object>) params.get("reserveInfo");
			
			System.out.println(reserve);
			
			Reserve re = new Reserve();
			
			re.setDate((String) reserve.get("date"));
			re.setPrice((int) reserve.get("price"));
			re.setName((String) reserve.get("name"));
			re.setEmail((String) reserve.get("email"));
			re.setAddress((String) reserve.get("address"));
			re.setContact((String) reserve.get("contact"));
			re.setPeopleNum((int) Integer.parseInt((String) reserve.get("peopleNum")));
			re.setDevice((String) reserve.get("device"));
			re.setHour((String) reserve.get("hour"));
			
			
			mainService.reserveStudio(re);
	
			return new ResponseEntity(HttpStatus.OK);
		
		} catch (Exception e) {
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
	}
}
