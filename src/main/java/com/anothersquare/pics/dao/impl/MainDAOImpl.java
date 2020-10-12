package com.anothersquare.pics.dao.impl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.anothersquare.pics.dao.MainDAO;
import com.anothersquare.pics.domain.Customer;

@Repository
public class MainDAOImpl  implements MainDAO{

	@Autowired
	private SqlSession session;
	private final String ns = "CustomerMapper.";
	
	@Override
	public Customer loginCustomer(String email) throws Exception {
		return session.selectOne(ns+"getCustomer", email);
	}
	
}
