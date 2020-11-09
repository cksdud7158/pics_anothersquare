package com.anothersquare.pics.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ErrorController implements org.springframework.boot.web.servlet.error.ErrorController {

	@Override
	public String getErrorPath() {
		return "/error";
	}
	
	@GetMapping("/error")
	public String redirectRoot() {
		return "index.html";
	}
	
}
