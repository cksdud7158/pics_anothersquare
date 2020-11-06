package com.anothersquare.pics.domain;

public class Reserve {
	private String hour;
	private String date;
	private String name;
	private String email;
	private int price;
	private String address;
	private String contact;
	private int peopleNum;
	private String device;
	private String review;
	private int rating;
	
	public Reserve() {
	}

	public Reserve(String hour, String date, String name, String email, int price, String address, String contact,
			int peopleNum, String device, String review, int rating) {
		super();
		this.hour = hour;
		this.date = date;
		this.name = name;
		this.email = email;
		this.price = price;
		this.address = address;
		this.contact = contact;
		this.peopleNum = peopleNum;
		this.device = device;
		this.review = review;
		this.rating = rating;
	}

	public String getHour() {
		return hour;
	}

	public void setHour(String hour) {
		this.hour = hour;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
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

	public int getPeopleNum() {
		return peopleNum;
	}

	public void setPeopleNum(int peopleNum) {
		this.peopleNum = peopleNum;
	}

	public String getDevice() {
		return device;
	}

	public void setDevice(String device) {
		this.device = device;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "Reserve [hour=" + hour + ", date=" + date + ", name=" + name + ", email=" + email + ", price=" + price
				+ ", address=" + address + ", contact=" + contact + ", peopleNum=" + peopleNum + ", device=" + device
				+ ", review=" + review + ", rating=" + rating + "]";
	}

	
	

}
