package com.gts.EmployeePlacementService.models;


import java.util.HashSet;
import java.util.Set;

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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name = "gts_company")
public class GtsCompany {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="gts_company_id",nullable=false)
	private Long gtsCompanyId;
	@Column(name="gts_company_name",nullable=false)
	private String gtsCompanyName;
	@Column(name="gts_company_description",nullable=false)
	private String gtsCompanyDescription;
	@Column(name="gts_company_status",nullable=false)
	private Boolean gtsCompanyStatus;
	@Column(name="gts_company_address",nullable=false)
	private String gtsCompanyAddress;
	@Column(name="gts_company_contact_email",nullable=false)
	private String gtsCompanyContactEmail;
	@Column(name="gts_company_contact_mobile_number",nullable=false)
	private String gtsCompanyContactMobileNumber;
	@Column(name="gts_company_contact_alternate_mobile_number",nullable=false)
	private String gtsCompanyContactAlternateMobileNumber;
	
	
//	 @ManyToMany(fetch = FetchType.EAGER, mappedBy = "gtsCompaniesSet")  
//	    private Set<GtsEmployeePlacementActivity> gtsEmployeePlacementActivitySet;
	
//	public Set<GtsEmployeePlacementActivity> getGtsEmployeePlacementActivitySet() {
//		return gtsEmployeePlacementActivitySet;
//	}
//	public void setGtsEmployeePlacementActivitySet(Set<GtsEmployeePlacementActivity> gtsEmployeePlacementActivitySet) {
//		this.gtsEmployeePlacementActivitySet = gtsEmployeePlacementActivitySet;
//	}
	
//	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
//	@JoinColumn(name="gts_company_id",insertable=false,updatable=false)
//	private GtsEmployeePlacementActivity gtsEmployeePlacementActivity;
//	

//	public GtsEmployeePlacementActivity getGtsEmployeePlacementActivity() {
//		return gtsEmployeePlacementActivity;
//	}
//	public void setGtsEmployeePlacementActivity(GtsEmployeePlacementActivity gtsEmployeePlacementActivity) {
//		this.gtsEmployeePlacementActivity = gtsEmployeePlacementActivity;
//	}
	
	
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "company")
	private Set<GtsEmployeePlacementActivity> gtsEmployeePlacementActivitiesList = new HashSet<>();
	public GtsCompany() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Set<GtsEmployeePlacementActivity> getGtsEmployeePlacementActivitiesList() {
		return gtsEmployeePlacementActivitiesList;
	}
	public void setGtsEmployeePlacementActivitiesList(
			Set<GtsEmployeePlacementActivity> gtsEmployeePlacementActivitiesList) {
		this.gtsEmployeePlacementActivitiesList = gtsEmployeePlacementActivitiesList;
	}
	public Long getGtsCompanyId() {
		return gtsCompanyId;
	}
	public GtsCompany(Long gtsCompanyId, String gtsCompanyName, String gtsCompanyDescription,
			Boolean gtsCompanyStatus, String gtsCompanyAddress, String gtsCompanyContactEmail,
			String gtsCompanyContactMobileNumber, String gtsCompanyContactAlternateMobileNumber) {
		super();
		this.gtsCompanyId = gtsCompanyId;
		this.gtsCompanyName = gtsCompanyName;
		this.gtsCompanyDescription = gtsCompanyDescription;
		this.gtsCompanyStatus = gtsCompanyStatus;
		this.gtsCompanyAddress = gtsCompanyAddress;
		this.gtsCompanyContactEmail = gtsCompanyContactEmail;
		this.gtsCompanyContactMobileNumber = gtsCompanyContactMobileNumber;
		this.gtsCompanyContactAlternateMobileNumber = gtsCompanyContactAlternateMobileNumber;
	}
	public void setGtsCompanyId(Long gtsCompanyId) {
		this.gtsCompanyId = gtsCompanyId;
	}
	public String getGtsCompanyName() {
		return gtsCompanyName;
	}
	public void setGtsCompanyName(String gtsCompanyName) {
		this.gtsCompanyName = gtsCompanyName;
	}
	public String getGtsCompanyDescription() {
		return gtsCompanyDescription;
	}
	public void setGtsCompanyDescription(String gtsCompanyDescription) {
		this.gtsCompanyDescription = gtsCompanyDescription;
	}
	public Boolean getGtsCompanyStatus() {
		return gtsCompanyStatus;
	}
	public void setGtsCompanyStatus(Boolean gtsCompanyStatus) {
		this.gtsCompanyStatus = gtsCompanyStatus;
	}
	public String getGtsCompanyAddress() {
		return gtsCompanyAddress;
	}
	public void setGtsCompanyAddress(String gtsCompanyAddress) {
		this.gtsCompanyAddress = gtsCompanyAddress;
	}
	public String getGtsCompanyContactEmail() {
		return gtsCompanyContactEmail;
	}
	public void setGtsCompanyContactEmail(String gtsCompanyContactEmail) {
		this.gtsCompanyContactEmail = gtsCompanyContactEmail;
	}
	public String getGtsCompanyContactMobileNumber() {
		return gtsCompanyContactMobileNumber;
	}
	public void setGtsCompanyContactMobileNumber(String gtsCompanyContactMobileNumber) {
		this.gtsCompanyContactMobileNumber = gtsCompanyContactMobileNumber;
	}
	public String getGtsCompanyContactAlternateMobileNumber() {
		return gtsCompanyContactAlternateMobileNumber;
	}
	public void setGtsCompanyContactAlternateMobileNumber(String gtsCompanyContactAlternateMobileNumber) {
		this.gtsCompanyContactAlternateMobileNumber = gtsCompanyContactAlternateMobileNumber;
	}

	

}
