package com.gts.users.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
@Entity
@Table(name = "gts_permission")
public class PermissionEntity implements Serializable{

	private static final long serialVersionUID = -2987011677395174506L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gts_permission_id;
	private String gts_permission_name;
	private boolean gts_permission_status=true;
	private String gts_permission_description;
	
	@ManyToMany(mappedBy = "permissions")
	private Collection<RoleEntity> roles;


	
	public PermissionEntity() {}
	
	
	
	public PermissionEntity(int gts_permission_id, String gts_permission_name, boolean gts_permission_status,
			String gts_permission_description) {
		super();
		this.gts_permission_id = gts_permission_id;
		this.gts_permission_name = gts_permission_name;
		this.gts_permission_status = gts_permission_status;
		this.gts_permission_description = gts_permission_description;
		
	}



	public PermissionEntity(String name) {
     this.gts_permission_name = name;
	}

	public Collection<RoleEntity> getRoles() {
		return roles;
	}

	public void setRoles(Collection<RoleEntity> roles) {
		this.roles = roles;
	}

	public int getGts_permission_id() {
		return gts_permission_id;
	}

	public void setGts_permission_id(int gts_permission_id) {
		this.gts_permission_id = gts_permission_id;
	}

	public String getGts_permission_name() {
		return gts_permission_name;
	}

	public void setGts_permission_name(String gts_permission_name) {
		this.gts_permission_name = gts_permission_name;
	}

	public boolean isGts_permission_status() {
		return gts_permission_status;
	}

	public void setGts_permission_status(boolean gts_permission_status) {
		this.gts_permission_status = gts_permission_status;
	}

	public String getGts_permission_description() {
		return gts_permission_description;
	}

	public void setGts_permission_description(String gts_permission_description) {
		this.gts_permission_description = gts_permission_description;
	}

	@Override
	public String toString() {
		return "PermissionEntity [gts_permission_id=" + gts_permission_id + ", gts_permission_name="
				+ gts_permission_name + ", gts_permission_status=" + gts_permission_status
				+ ", gts_permission_description=" + gts_permission_description + ", roles=" + roles + "]";
	}
	
	
	
}
