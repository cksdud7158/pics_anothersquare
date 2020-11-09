package com.anothersquare.pics.dao;

import java.util.List;

import com.anothersquare.pics.domain.Customer;
import com.anothersquare.pics.domain.Reserve;
import com.anothersquare.pics.domain.Studio;

public interface MainDAO {
	Customer loginCustomer(String email) throws Exception;
	Studio getStudio(String name) throws Exception;
	List getStudios() throws Exception;
	Reserve getReserve(Reserve re) throws Exception;
	List getAllReserve() throws Exception;
	int registerCustomer(Customer cs) throws Exception;
	int deleteReserve(Reserve re) throws Exception;
	int registerReview(Reserve re) throws Exception;
	int reserveStudio(Reserve re) throws Exception;
	List getEmail(String email) throws Exception;

}
