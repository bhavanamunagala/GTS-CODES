package com.gts.users.model.request;

public class PasswordResetModel {
	
	private String token;
	private String gts_user_new_Password;
	
	
	
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getGts_user_new_Password() {
		return gts_user_new_Password;
	}
	public void setGts_user_new_Password(String gts_user_new_Password) {
		this.gts_user_new_Password = gts_user_new_Password;
	}
    
	

}
