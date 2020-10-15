package com.anothersquare.pics.domain;

public class Reserve {
	private String hour;
	private String date;
	private String name;
	
	public Reserve() {
	}

	public Reserve(String hour, String date, String name) {
		super();
		this.hour = hour;
		this.date = date;
		this.name = name;
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

	@Override
	public String toString() {
		return "Reserve [hour=" + hour + ", date=" + date + ", name=" + name + "]";
	}
	
}
