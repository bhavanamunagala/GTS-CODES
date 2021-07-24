package com.gts.users.shared.dto;

import java.util.List;


public class UserRolesMapDto {
	
	private long gts_user_role_id;
	
	
	private long gts_user_id;

	private  String roles;
	
	private long primary_role_id;

	private String message;
	
	private String permissions;
	
	
	public String getPermissions() {
		return permissions;
	}

	public void setPermissions(String permissions) {
		this.permissions = permissions;
	}

	public long getGts_user_role_id() {
		return gts_user_role_id;
	}

	public void setGts_user_role_id(long gts_user_role_id) {
		this.gts_user_role_id = gts_user_role_id;
	}

	public long getGts_user_id() {
		return gts_user_id;
	}




	public void setGts_user_id(long gts_user_id) {
		this.gts_user_id = gts_user_id;
	}


	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}

	public long getPrimary_role_id() {
		return primary_role_id;
	}


	public void setPrimary_role_id(long primary_role_id) {
		this.primary_role_id = primary_role_id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "UserRolesMapDto [gts_user_role_id=" + gts_user_role_id + ", gts_user_id=" + gts_user_id + ", roles="
				+ roles + ", primary_role_id=" + primary_role_id + ", message=" + message + ", permissions="
				+ permissions + "]";
	}


	
}
