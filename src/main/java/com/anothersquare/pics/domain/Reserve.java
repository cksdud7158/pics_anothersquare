package com.anothersquare.pics.domain;

public class Reserve {
	private String hour;
	private String date;
	private String name;
	private String email;
	private String price;
	
	public Reserve() {
	}

	public Reserve(String hour, String date, String name, String email, String price) {
		super();
		this.hour = hour;
		this.date = date;
		this.name = name;
		this.email = email;
		this.price = price;
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

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Reserve [hour=" + hour + ", date=" + date + ", name=" + name + ", email=" + email + ", price=" + price
				+ "]";
	}

	
	
	
}
