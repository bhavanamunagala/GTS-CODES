package com.gts.users.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


@Entity
@Table(name="gts_users")
public class UserEntity implements Serializable {

	private static final long serialVersionUID = -1671555207165312934L;
    
	@Id
	@Column(nullable = false)
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long gts_user_id=1;
	
	private String gts_user_email;
	
    private String gts_user_password;
	
    private boolean gts_user_status=true;
    
    private int gts_user_login_tries=0;
    
    private int gts_primary_contact_number;
 
    private int gts_user_country_code;
    
    private boolean gts_primary_contact_is_validated=true;
    
    private boolean gts_user_email_is_validated=true;

    @ManyToMany(cascade = CascadeType.PERSIST , fetch = FetchType.EAGER)
    @JoinTable(name="gts_user_roles" , joinColumns = @JoinColumn(name="gts_user_id", referencedColumnName = "gts_user_id"),
    		                               inverseJoinColumns = @JoinColumn(name="gts_role_id" , referencedColumnName = "gts_role_id"))
	private List<RoleEntity> roles;
    
    
	public UserEntity() { 	}
	
	public UserEntity(String email ) {
		this.gts_user_email=email;
		this.gts_user_status=true;
	}
	

	public UserEntity(long gts_user_id, int gts_user_country_code, int gts_primary_contact_number, String gts_user_password, boolean gts_user_status, int gts_user_login_tries,
			boolean gts_primary_contact_is_validated,
			List<RoleEntity> roles) {
		super();
		this.gts_user_id = gts_user_id;
		this.gts_user_country_code = gts_user_country_code;
		this.gts_primary_contact_number = gts_primary_contact_number;
		this.gts_user_password = gts_user_password;
		this.gts_user_status = gts_user_status;
		this.gts_user_login_tries = gts_user_login_tries;
		this.gts_primary_contact_is_validated = gts_primary_contact_is_validated;
		this.roles = roles;
	}

	public UserEntity(long gts_user_id, String gts_user_email, String gts_user_password, boolean gts_user_status,
			int gts_user_login_tries, boolean gts_user_email_is_validated) {
		super();
		this.gts_user_email = gts_user_email;
		this.gts_user_password = gts_user_password;

	}

	public List<RoleEntity> getRoles() {
		return roles;
	}

	public void setRoles(List<RoleEntity> roles) {
		this.roles = roles;
	}

	public void setGts_user_id(long gts_user_id) {
		this.gts_user_id = gts_user_id;
	}

	public Long getGts_user_id() {
		return gts_user_id;
	}

	public void setGts_user_id(Long gts_user_id) {
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

	@Override
	public String toString() {
		return "UserEntity [gts_user_id=" + gts_user_id + ", gts_user_email=" + gts_user_email + ", gts_user_password="
				+ gts_user_password + ", gts_user_status=" + gts_user_status + ", gts_user_login_tries="
				+ gts_user_login_tries + ", gts_primary_contact_number=" + gts_primary_contact_number
				+ ", gts_user_country_code=" + gts_user_country_code + ", gts_primary_contact_is_validated="
				+ gts_primary_contact_is_validated + ", gts_user_email_is_validated=" + gts_user_email_is_validated
				+ ", roles=" + roles + "]";
	}
	
}
