package com.anothersquare.pics.service;

import com.anothersquare.pics.domain.Customer;

public interface MainService {
	Customer loginCustomer(String email) throws Exception;

}
