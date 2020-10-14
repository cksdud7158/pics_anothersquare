package com.anothersquare.pics.dao.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.anothersquare.pics.dao.MainDAO;
import com.anothersquare.pics.domain.Customer;
import com.anothersquare.pics.domain.Studio;

@Repository
public class MainDAOImpl  implements MainDAO{

	@Autowired
	private SqlSession session;
	private final String ns = "CustomerMapper.";
	
	@Override
	public Customer loginCustomer(String email) throws Exception {
		return session.selectOne(ns+"getCustomer", email);
	}

	@Override
	public Studio getStudio(String name) throws Exception {
		return session.selectOne(ns+"getStudio", name);
	}

	@Override
	public List getStudios() throws Exception {
		return session.selectList(ns+"getStudios");
	}
	
	
	
}
