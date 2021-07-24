package com.gts.users.model.response;

import java.util.List;

import com.gts.users.entities.RoleEntity;

public class UserRest {

	private long gts_user_id;
	private String gts_user_email;
	private String gts_user_password;
    private boolean gts_user_status;
    private int gts_user_login_tries;
    private int gts_primary_contact_number;
    private int gts_user_country_code;
    private boolean gts_primary_contact_is_validated;
    private boolean gts_user_email_is_validated;

    
    private List<RoleRest> roles;
    
    
	public long getGts_user_id() {
		return gts_user_id;
	}


	public void setGts_user_id(long gts_user_id) {
		this.gts_user_id = gts_user_id;
	}


	public String getGts_user_email() {
		return gts_user_email;
	}


	public void setGts_user_email(String gts_user_email) {
		this.gts_user_email = gts_user_email;
	}


	public String getGts_user_password() {
		return gts_user_password;
	}


	public void setGts_user_password(String gts_user_password) {
		this.gts_user_password = gts_user_password;
	}


	public boolean isGts_user_status() {
		return gts_user_status;
	}


	public void setGts_user_status(boolean gts_user_status) {
		this.gts_user_status = gts_user_status;
	}


	public int getGts_user_login_tries() {
		return gts_user_login_tries;
	}


	public void setGts_user_login_tries(int gts_user_login_tries) {
		this.gts_user_login_tries = gts_user_login_tries;
	}


	public int getGts_primary_contact_number() {
		return gts_primary_contact_number;
	}


	public void setGts_primary_contact_number(int gts_primary_contact_number) {
		this.gts_primary_contact_number = gts_primary_contact_number;
	}


	public int getGts_user_country_code() {
		return gts_user_country_code;
	}


	public void setGts_user_country_code(int gts_user_country_code) {
		this.gts_user_country_code = gts_user_country_code;
	}


	public boolean isGts_primary_contact_is_validated() {
		return gts_primary_contact_is_validated;
	}


	public void setGts_primary_contact_is_validated(boolean gts_primary_contact_is_validated) {
		this.gts_primary_contact_is_validated = gts_primary_contact_is_validated;
	}


	public boolean isGts_user_email_is_validated() {
		return gts_user_email_is_validated;
	}


	public void setGts_user_email_is_validated(boolean gts_user_email_is_validated) {
		this.gts_user_email_is_validated = gts_user_email_is_validated;
	}


	public List<RoleRest> getRoles() {
		return roles;
	}


	public void setRoles(List<RoleRest> roles) {
		this.roles = roles;
	}

	
	

	
	
}
