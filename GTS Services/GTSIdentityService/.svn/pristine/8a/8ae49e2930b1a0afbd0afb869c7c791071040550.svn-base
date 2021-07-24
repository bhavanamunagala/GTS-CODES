package com.gts.users.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="gts_roles_permissions_map")
public class RolePermissionsMapEntity implements Serializable {


	private static final long serialVersionUID = -2584869361586588667L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long gts_role_permission_id;
	
	private long gts_role_id;
	private long gts_permission_id;
	

	public long getGts_role_permission_id() {
		return gts_role_permission_id;
	}
	public void setGts_role_permission_id(long gts_role_permission_id) {
		this.gts_role_permission_id = gts_role_permission_id;
	}
	public long getGts_role_id() {
		return gts_role_id;
	}
	public void setGts_role_id(long gts_role_id) {
		this.gts_role_id = gts_role_id;
	}
	public long getGts_permission_id() {
		return gts_permission_id;
	}
	public void setGts_permission_id(long gts_permission_id) {
		this.gts_permission_id = gts_permission_id;
	}
	@Override
	public String toString() {
		return "RolePermissionsMapEntity [gts_role_permission_id=" + gts_role_permission_id + ", gts_role_id="
				+ gts_role_id + ", gts_permission_id=" + gts_permission_id + "]";
	}


}
