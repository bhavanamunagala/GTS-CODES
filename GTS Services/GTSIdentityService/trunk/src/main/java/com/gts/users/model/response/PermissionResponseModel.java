package com.gts.users.model.response;

public class PermissionResponseModel {

	private int gts_permission_id;
	
    private String gts_permission_name;
	
	private String gts_permission_description;
	
	private boolean gts_permission_status;

	public String getGts_permission_name() {
		return gts_permission_name;
	}

	public void setGts_permission_name(String gts_permission_name) {
		this.gts_permission_name = gts_permission_name;
	}

	public String getGts_permission_description() {
		return gts_permission_description;
	}

	public void setGts_permission_description(String gts_permission_description) {
		this.gts_permission_description = gts_permission_description;
	}

	public boolean isGts_permission_status() {
		return gts_permission_status;
	}

	public void setGts_permission_status(boolean gts_permission_status) {
		this.gts_permission_status = gts_permission_status;
	}

	public int getGts_permission_id() {
		return gts_permission_id;
	}

	public void setGts_permission_id(int gts_permission_id) {
		this.gts_permission_id = gts_permission_id;
	}
	
	
	
}
