package com.anothersquare.pics.dao.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.anothersquare.pics.dao.MainDAO;
import com.anothersquare.pics.domain.Customer;
import com.anothersquare.pics.domain.Reserve;
import com.anothersquare.pics.domain.Studio;

@Repository
public class MainDAOImpl  implements MainDAO{

	@Autowired
	private SqlSession session;
	private final String ns = "MainMapper.";
	
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

	@Override
	public Reserve getReserve(Reserve re) throws Exception {
		return session.selectOne(ns+"getReserve", re);

	}

	@Override
	public List getAllReserve() throws Exception {
		return session.selectList(ns+"getAllReserve");
	}

	@Override
	public int registerCustomer(Customer cs) throws Exception {
		return session.insert(ns+"registerCustomer", cs);
	}

	@Override
	public int deleteReserve(Reserve re) throws Exception {
		return session.delete(ns+"deleteReserve", re);
	}

	@Override
	public int registerReview(Reserve re) throws Exception {
		return session.update(ns+"registerReview", re);
	}
	
	
	
}
