package com.anothersquare.pics.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.anothersquare.pics.dao.MainDAO;
import com.anothersquare.pics.domain.Customer;
import com.anothersquare.pics.domain.Reserve;
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

	@Override
	public Reserve getReserve(Reserve re) throws Exception {
		return mainDAO.getReserve(re);
	}

	@Override
	public List getAllReserve() throws Exception {
		return mainDAO.getAllReserve();
	}

	@Override
	public int registerCustomer(Customer cs) throws Exception {
		return mainDAO.registerCustomer(cs);
	}

	@Override
	public int deleteReserve(Reserve re) throws Exception {
		return mainDAO.deleteReserve(re);
	}

	@Override
	public int registerReview(Reserve re) throws Exception {
		return mainDAO.registerReview(re);
	}
		


}
