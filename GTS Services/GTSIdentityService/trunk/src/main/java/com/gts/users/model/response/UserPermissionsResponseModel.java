package com.gts.users.model.response;

public class UserPermissionsResponseModel {
	
	private long gts_user_id;
	private String permissions;
	
	
	public long getGts_user_id() {
		return gts_user_id;
	}
	public void setGts_user_id(long gts_user_id) {
		this.gts_user_id = gts_user_id;
	}
	public String getPermissions() {
		return permissions;
	}
	public void setPermissions(String permissions) {
		this.permissions = permissions;
	}
	
	
}
