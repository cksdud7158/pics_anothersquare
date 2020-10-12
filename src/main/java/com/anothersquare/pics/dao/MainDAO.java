package com.anothersquare.pics.dao;

import com.anothersquare.pics.domain.Customer;

public interface MainDAO {
	Customer loginCustomer(String email) throws Exception;
}
