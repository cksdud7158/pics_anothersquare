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
}
