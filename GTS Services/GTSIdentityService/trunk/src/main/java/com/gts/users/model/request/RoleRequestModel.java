package com.gts.users.model.request;

import java.util.List;


public class RoleRequestModel {
	
	private long gts_role_id;
	private String gts_role_name;
	private String gts_role_description;
	private boolean gts_role_status;
	
	private int primary_role_id;
	
	private List<PermissionRequestModel> permissions;

	

	public int getPrimary_role_id() {
		return primary_role_id;
	}

	public void setPrimary_role_id(int primary_role_id) {
		this.primary_role_id = primary_role_id;
	}

	public long getGts_role_id() {
		return gts_role_id;
	}

	public void setGts_role_id(long gts_role_id) {
		this.gts_role_id = gts_role_id;
	}

	public String getGts_role_name() {
		return gts_role_name;
	}

	public void setGts_role_name(String gts_role_name) {
		this.gts_role_name = gts_role_name;
	}

	public String getGts_role_description() {
		return gts_role_description;
	}

	public void setGts_role_description(String gts_role_description) {
		this.gts_role_description = gts_role_description;
	}

	public boolean isGts_role_status() {
		return gts_role_status;
	}

	public void setGts_role_status(boolean gts_role_status) {
		this.gts_role_status = gts_role_status;
	}

	public List<PermissionRequestModel> getPermissions() {
		return permissions;
	}

	public void setPermissions(List<PermissionRequestModel> permissions) {
		this.permissions = permissions;
	}
	
	
	
	
	
}
