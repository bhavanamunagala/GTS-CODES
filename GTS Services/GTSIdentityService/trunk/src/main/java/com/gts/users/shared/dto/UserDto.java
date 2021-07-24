package com.gts.users.shared.dto;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import com.gts.users.entities.RoleEntity;

public class UserDto implements Serializable{


	private static final long serialVersionUID = -3132353444802327151L;

	private long gts_user_id;
	private String gts_user_email;
	private String gts_user_password;
    private boolean gts_user_status;
    private int gts_status_code;
    private int gts_user_login_tries;
    private int gts_primary_contact_number;
    private int gts_user_country_code;
    private boolean gts_primary_contact_is_validated;
    private boolean gts_user_email_is_validated;
    
    private List<RoleDto> roles;
    
    private String message;
    private boolean flag;
    

	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}

	public int getGts_status_code() {
		return gts_status_code;
	}

	public void setGts_status_code(int gts_status_code) {
		this.gts_status_code = gts_status_code;
	}



	public String getMessage() {
		return message;
	}



	public void setMessage(String message) {
		this.message = message;
	}



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

	public List<RoleDto> getRoles() {
		return roles;
	}



	public void setRoles(List<RoleDto> roles) {
		this.roles = roles;
	}



	@Override
	public String toString() {
		return "UserDto [gts_user_id=" + gts_user_id + ", gts_user_email=" + gts_user_email + ", gts_user_password="
				+ gts_user_password + ", gts_user_status=" + gts_user_status + ", gts_user_login_tries="
				+ gts_user_login_tries ;
	}
	
    

    
    


}
