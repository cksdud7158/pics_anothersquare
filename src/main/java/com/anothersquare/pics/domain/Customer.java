package com.anothersquare.pics.domain;

public class Customer {
	private String email;
	private String password;
	private String name;
	private String gender;
	private String address;
	private String contact;
	
	
	public Customer() {}


	public Customer(String email, String password, String name, String gender, String address, String contact) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.gender = gender;
		this.address = address;
		this.contact = contact;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getContact() {
		return contact;
	}


	public void setContact(String contact) {
		this.contact = contact;
	}


	@Override
	public String toString() {
		return "Customer [email=" + email + ", password=" + password + ", name=" + name + ", gender=" + gender
				+ ", address=" + address + ", contact=" + contact + "]";
	}
	
	

	
	}


