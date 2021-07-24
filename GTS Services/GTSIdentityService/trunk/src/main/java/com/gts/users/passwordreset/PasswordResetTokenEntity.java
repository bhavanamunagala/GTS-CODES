package com.gts.users.passwordreset;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import com.gts.users.entities.UserEntity;

@Entity(name = "password_reset_tokens")
public class PasswordResetTokenEntity implements Serializable{

	private static final long serialVersionUID = 2341510696776826747L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long gts_token_id;

	private String gts_password_reset_token;

	@CreationTimestamp
	private Timestamp gts_token_creation_timestap;
	
	
	@OneToOne
	@JoinColumn(name="gts_user_id")
	private UserEntity gts_user_detials;

 
	public long getGts_token_id() {
		return gts_token_id;
	}

	public void setGts_token_id(long gts_token_id) {
		this.gts_token_id = gts_token_id;
	}


	public String getGts_password_reset_token() {
		return gts_password_reset_token;
	}

	public void setGts_password_reset_token(String gts_password_reset_token) {
		this.gts_password_reset_token = gts_password_reset_token;
	}

	public UserEntity getGts_user_detials() {
		return gts_user_detials;
	}

	public void setGts_user_detials(UserEntity gts_user_detials) {
		this.gts_user_detials = gts_user_detials;
	}

	public Timestamp getGts_token_creation_timestap() {
		return gts_token_creation_timestap;
	}

	public void setGts_token_creation_timestap(Timestamp gts_token_creation_timestap) {
		this.gts_token_creation_timestap = gts_token_creation_timestap;
	}

  
}
