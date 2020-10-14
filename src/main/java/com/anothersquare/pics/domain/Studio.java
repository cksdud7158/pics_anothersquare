package com.anothersquare.pics.domain;

public class Studio {
	private String name;
	private String address; 
	private String contact;
	private int price;
	private int parking;
	private int light;
	private int area;
	private String tag1;
	private String tag2;
	private String tag3;
	private String hasDevice;
	private int capacityPeople;
	
	public Studio() {}

	public Studio(String name, String address, String contact, int price, int parking, int light, int area, String tag1,
			String tag2, String tag3, String hasDevice, int capacityPeople) {
		super();
		this.name = name;
		this.address = address;
		this.contact = contact;
		this.price = price;
		this.parking = parking;
		this.light = light;
		this.area = area;
		this.tag1 = tag1;
		this.tag2 = tag2;
		this.tag3 = tag3;
		this.hasDevice = hasDevice;
		this.capacityPeople = capacityPeople;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getParking() {
		return parking;
	}

	public void setParking(int parking) {
		this.parking = parking;
	}

	public int getLight() {
		return light;
	}

	public void setLight(int light) {
		this.light = light;
	}

	public int getArea() {
		return area;
	}

	public void setArea(int area) {
		this.area = area;
	}

	public String getTag1() {
		return tag1;
	}

	public void setTag1(String tag1) {
		this.tag1 = tag1;
	}

	public String getTag2() {
		return tag2;
	}

	public void setTag2(String tag2) {
		this.tag2 = tag2;
	}

	public String getTag3() {
		return tag3;
	}

	public void setTag3(String tag3) {
		this.tag3 = tag3;
	}

	public String getHasDevice() {
		return hasDevice;
	}

	public void setHasDevice(String hasDevice) {
		this.hasDevice = hasDevice;
	}

	public int getCapacityPeople() {
		return capacityPeople;
	}

	public void setCapacityPeople(int capacityPeople) {
		this.capacityPeople = capacityPeople;
	}

	@Override
	public String toString() {
		return "Studio [name=" + name + ", address=" + address + ", contact=" + contact + ", price=" + price
				+ ", parking=" + parking + ", light=" + light + ", area=" + area + ", tag1=" + tag1 + ", tag2=" + tag2
				+ ", tag3=" + tag3 + ", hasDevice=" + hasDevice + ", capacityPeople=" + capacityPeople + "]";
	}
	
		
}
