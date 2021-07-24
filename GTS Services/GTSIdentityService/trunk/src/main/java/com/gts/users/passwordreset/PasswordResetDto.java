package com.gts.users.passwordreset;

public class PasswordResetDto {

	private String gts_user_email;
	private String token;
	private long gts_user_id;
	private String gts_user_old_Password;
	private String gts_user_new_Password;
	 
	
	public String getGts_user_email() {
		return gts_user_email;
	}
	public void setGts_user_email(String gts_user_email) {
		this.gts_user_email = gts_user_email;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public long getGts_user_id() {
		return gts_user_id;
	}
	public void setGts_user_id(long gts_user_id) {
		this.gts_user_id = gts_user_id;
	}
	public String getGts_user_new_Password() {
		return gts_user_new_Password;
	}
	public void setGts_user_new_Password(String gts_user_new_Password) {
		this.gts_user_new_Password = gts_user_new_Password;
	}
	public String getGts_user_old_Password() {
		return gts_user_old_Password;
	}
	public void setGts_user_old_Password(String gts_user_old_Password) {
		this.gts_user_old_Password = gts_user_old_Password;
	}
	
	
	
    
	
}
