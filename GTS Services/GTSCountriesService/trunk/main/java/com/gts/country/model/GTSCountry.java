package com.gts.country.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="gts_countries")
public class GTSCountry {
	
	@Id
	//@GeneratedValue(strategy=GenerationType.AUTO,generator="native")
	@GenericGenerator(name = "native",strategy = "native")
	@Column(name="gts_country_id")
	private Integer gtsCountryId;
	
	@Column(name="gts_country_name" )
	private String gtsCountryName;
	
	@Column(name="gts_country_description")
	private String gtsCountryDescription;
	
	@Column(name="gts_country_status")
	private boolean gtsCountryStatus;
	
	public GTSCountry() {
		
	}

	public GTSCountry(Integer gtsCountryId) {
		super();
		this.gtsCountryId = gtsCountryId;
	}
	
	public GTSCountry(String gtsCountryName) {
		super();
		this.gtsCountryName = gtsCountryName;
	}

	public GTSCountry(Integer gtsCountryId, String gtsCountryName, String gtsCountryDescription,
			boolean gtsCountryStatus) {
		super();
		this.gtsCountryId = gtsCountryId;
		this.gtsCountryName = gtsCountryName;
		this.gtsCountryDescription = gtsCountryDescription;
		this.gtsCountryStatus = gtsCountryStatus;
	}

	public Integer getGtsCountryId() {
		return gtsCountryId;
	}

	public void setGtsCountryId(Integer gtsCountryId) {
		this.gtsCountryId = gtsCountryId;
	}

	public String getGtsCountryName() {
		return gtsCountryName;
	}

	public void setGtsCountryName(String gtsCountryName) {
		this.gtsCountryName = gtsCountryName;
	}

	public String getGtsCountryDescription() {
		return gtsCountryDescription;
	}

	public void setGtsCountryDescription(String gtsCountryDescription) {
		this.gtsCountryDescription = gtsCountryDescription;
	}

	public boolean isGtsCountryStatus() {
		return gtsCountryStatus;
	}

	public void setGtsCountryStatus(boolean gtsCountryStatus) {
		this.gtsCountryStatus = gtsCountryStatus;
	}
	
}
