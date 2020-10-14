package com.anothersquare.pics.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.anothersquare.pics.dao.MainDAO;
import com.anothersquare.pics.domain.Customer;
import com.anothersquare.pics.domain.Studio;
import com.anothersquare.pics.service.MainService;

@Service
public class MainServiceImpl implements MainService{
	
	@Autowired
	private MainDAO mainDAO;
	
	@Override
	public Customer loginCustomer(String email) throws Exception {
		return mainDAO.loginCustomer(email);
	}

	@Override
	public Studio getStudio(String name) throws Exception {
		return mainDAO.getStudio(name);
	}

	@Override
	public List getStudios() throws Exception {
		return mainDAO.getStudios();
	}
		


}
