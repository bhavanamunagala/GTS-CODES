package com.gts.users.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "gts_user_roles")
public class UserRolesMapEntity {

	@Id
	@Column(nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long gts_user_role_id;
	
	@Column(nullable = false)
	private long gts_user_id;
	
	@Column(nullable = false)
	private long gts_role_id;


	private boolean is_primary;
	
	

	public long getGts_user_role_id() {
		return gts_user_role_id;
	}

	public void setGts_user_role_id(long gts_user_role_id) {
		this.gts_user_role_id = gts_user_role_id;
	}



	public boolean isIs_primary() {
		return is_primary;
	}

	public void setIs_primary(boolean is_primary) {
		this.is_primary = is_primary;
	}

	public long getGts_user_id() {
		return gts_user_id;
	}

	public void setGts_user_id(long gts_user_id) {
		this.gts_user_id = gts_user_id;
	}

	public long getGts_role_id() {
		return gts_role_id;
	}

	public void setGts_role_id(long gts_role_id) {
		this.gts_role_id = gts_role_id;
	}

	@Override
	public String toString() {
		return "UserRolesMapEntity [gts_user_role_id=" + gts_user_role_id + ", gts_user_id=" + gts_user_id
				+ ", gts_role_id=" + gts_role_id + ", is_primary=" + is_primary + "]";
	}




	
	
	
	
	
	
	
	
}
