package com.anothersquare.pics.domain;

public class User {
	private String userEmail;
	private String UserPassoword;
	
	public User() {
		
	}
	
	public User(String userEmail, String userPassoword) {
		super();
		this.userEmail = userEmail;
		UserPassoword = userPassoword;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassoword() {
		return UserPassoword;
	}

	public void setUserPassoword(String userPassoword) {
		UserPassoword = userPassoword;
	}

	@Override
	public String toString() {
		return "User [userEmail=" + userEmail + ", UserPassoword=" + UserPassoword + "]";
	}	
	
}
