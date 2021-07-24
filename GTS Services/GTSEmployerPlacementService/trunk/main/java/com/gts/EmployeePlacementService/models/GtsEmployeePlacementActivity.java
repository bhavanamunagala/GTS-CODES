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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "gts_employee_placement_activity")
public class GtsEmployeePlacementActivity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "gts_candidate_id", nullable = false)
	@JsonProperty("gts_candidate_id")
	private Long gts_candidate_id;
//	

	@JsonProperty("gts_candidate_name")
	@Column(name = "gts_candidate_name", nullable = false)
	private String gts_candidate_name;
	@JsonProperty("gts_candidate_email_id")
	@Column(name = "gts_candidate_email_id", nullable = false)
	private String gts_candidate_email_id;
	@JsonProperty("gts_candidate_mobile_number")
	@Column(name = "gts_candidate_mobile_number", nullable = false)
	private String gts_candidate_mobile_number;
	@JsonProperty("gts_user_project_id")
	@Column(name = "GTS_USER_PROJECT_ID", nullable = false)
	private Long gtsUserProjectId;

	
	



	public Long getGtsUserProjectId() {
		return gtsUserProjectId;
	}

	public void setGtsUserProjectId(Long gtsUserProjectId) {
		this.gtsUserProjectId = gtsUserProjectId;
	}


	@JsonProperty("gts_project_manager")
	@Column(name = "gts_project_manager", nullable = false)
	private String gts_project_manager;
	@JsonProperty("gts_project_manager_contact_number")
	@Column(name = "gts_project_manager_contact_number", nullable = false)
	private String gts_project_manager_contact_number;
	@JsonProperty("gts_contract_duration")
	@Column(name = "gts_contract_duration", nullable = false)
	private Long gts_contract_duration;
	@JsonProperty("gts_candidate_salary")
	@Column(name = "gts_candidate_salary", nullable = false)
	private Long gts_candidate_salary;
	@JsonProperty("gts_job_seeker_monthly_cost")
	@Column(name = "gts_job_seeker_monthly_cost", nullable = false)
	private int gts_job_seeker_monthly_cost;
	@JsonProperty("gts_job_seeker_bonus_cost")
	@Column(name = "gts_job_seeker_bonus_cost", nullable = false)
	private int gts_job_seeker_bonus_cost;
	@JsonProperty("gts_requester_name")
	@Column(name = "gts_requester_name", nullable = false)
	private String gts_requester_name;
	@JsonProperty("gts_approver_email_id")
	@Column(name = "gts_approver_email_id", nullable = false)
	private String gts_approver_email_id;
	@JsonProperty("gts_approver_name")
	@Column(name = "gts_approver_name", nullable = false)
	private String gts_approver_name;
	@JsonProperty("gts_approver_phone_number")
	@Column(name = "gts_approver_phone_number", nullable = false)
	private String gts_approver_phone_number;
	@JsonProperty("gts_company_id")
	@Column(name = "gts_company_id", nullable = false)
	private Long gtsCompanyId;
	
	
	
	
	
	
	
	
	public Long getGtsCompanyId() {
		return gtsCompanyId;
	}

	public void setGtsCompanyId(Long gtsCompanyId) {
		this.gtsCompanyId = gtsCompanyId;
	}

	

	public GtsEmployeePlacementActivity() {
		super();
		// TODO Auto-generated constructor stub
	}


//	@ManyToMany(fetch = FetchType.LAZY,
//			cascade={ 
//        CascadeType.PERSIST, 
//        CascadeType.MERGE
//    })
//    @JoinTable(name = "gts_employee_placement_activty_user_projects",
//            joinColumns = { @JoinColumn(name = "gts_candidate_id") },
//            inverseJoinColumns = { @JoinColumn(name = "gts_user_project_id") })
//    private Set<GtsUserProjects> gtsUserProjectsSet = new HashSet<>();

//	@OneToMany(cascade = CascadeType.PERSIST, mappedBy = "gtsEmploymentPlacementActivity")
//	private Set<GtsUserProjects> gtsUserProjectsset = new HashSet<>();
	
//	@OneToMany(cascade = CascadeType.ALL, mappedBy = "gtsEmploymentPlacementActivity")
//	private Set<GtsCompany> gtsCompaniesset = new HashSet<>();
//
//	public Set<GtsCompany> getGtsCompaniesset() {
//		return gtsCompaniesset;
//	}
//
//	public void setGtsCompaniesset(Set<GtsCompany> gtsCompaniesset) {
//		this.gtsCompaniesset = gtsCompaniesset;
//	}

	@JsonIgnore
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.PERSIST)
	@JoinColumn(name="gts_company_id",insertable=false,updatable=false)
	private GtsCompany company;
	@JsonIgnore
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.PERSIST)
	@JoinColumn(name="gts_user_project_id",insertable=false,updatable=false)
	private GtsUserProjects gtsUserProject;
	

public GtsUserProjects getGtsUserProject() {
		return gtsUserProject;
	}

	public void setGtsUserProject(GtsUserProjects gtsUserProject) {
		this.gtsUserProject = gtsUserProject;
	}

	//	public GtsEmployeePlacementActivity getGtsEmployeePlacementActivity() {
//		return gtsEmployeePlacementActivity;
//	}
	public GtsCompany getCompany() {
		return company;
	}

	public void setCompany(GtsCompany company) {
		this.company = company;
	}

//	public void setGtsEmployeePlacementActivity(GtsEmployeePlacementActivity gtsEmployeePlacementActivity) {
//		this.gtsEmployeePlacementActivity = gtsEmployeePlacementActivity;}
//	public Set<GtsUserProjects> getGtsUserProjectsset() {
//		return gtsUserProjectsset;
//	}
//
//	public void setGtsUserProjectsset(Set<GtsUserProjects> gtsUserProjectsset) {
//		this.gtsUserProjectsset = gtsUserProjectsset;
//	}

//	

//	public Set<GtsUserProjects> getGtsUserProjectsSet() {
//		return gtsUserProjectsSet;
//	}
//
//	public void setGtsUserProjectsSet(Set<GtsUserProjects> gtsUserProjectsSet) {
//		this.gtsUserProjectsSet = gtsUserProjectsSet;
//	}
//
//	public Set<GtsCompanies> getGtsCompaniesSet() {
//		return gtsCompaniesSet;
//	}
//
//	public void setGtsCompaniesSet(Set<GtsCompanies> gtsCompaniesSet) {
//		this.gtsCompaniesSet = gtsCompaniesSet;
//	}

	public GtsEmployeePlacementActivity(Long gts_candidate_id, String gts_candidate_name, String gts_candidate_email_id,
			String gts_candidate_mobile_number, Long gts_project_id, String gts_project_manager,
			String gts_project_manager_contact_number, Long gts_contract_duration, Long gts_candidate_salary,
			int gts_job_seeker_monthly_cost, int gts_job_seeker_bonus_cost, String gts_requester_name,
			String gts_approver_email_id, String gts_approver_name, String gts_approver_phone_number,
			Long gts_company_id) {
		super();
		this.gts_candidate_id = gts_candidate_id;
		this.gts_candidate_name = gts_candidate_name;
		this.gts_candidate_email_id = gts_candidate_email_id;
		this.gts_candidate_mobile_number = gts_candidate_mobile_number;
		// this.gts_project_id = gts_project_id;
		this.gts_project_manager = gts_project_manager;
		this.gts_project_manager_contact_number = gts_project_manager_contact_number;
		this.gts_contract_duration = gts_contract_duration;
		this.gts_candidate_salary = gts_candidate_salary;
		this.gts_job_seeker_monthly_cost = gts_job_seeker_monthly_cost;
		this.gts_job_seeker_bonus_cost = gts_job_seeker_bonus_cost;
		this.gts_requester_name = gts_requester_name;
		this.gts_approver_email_id = gts_approver_email_id;
		this.gts_approver_name = gts_approver_name;
		this.gts_approver_phone_number = gts_approver_phone_number;
		this.gtsCompanyId = gts_company_id;
	}

	public Long getGts_candidate_id() {
		return gts_candidate_id;
	}

	public void setGts_candidate_id(Long gts_candidate_id) {
		this.gts_candidate_id = gts_candidate_id;
	}

//	public void setGts_project_id(Long gts_project_id) {
//		this.gts_project_id = gts_project_id;
//	}

	public void setGts_contract_duration(Long gts_contract_duration) {
		this.gts_contract_duration = gts_contract_duration;
	}

	public void setGts_candidate_salary(Long gts_candidate_salary) {
		this.gts_candidate_salary = gts_candidate_salary;
	}

	public void setGts_job_seeker_monthly_cost(int gts_job_seeker_monthly_cost) {
		this.gts_job_seeker_monthly_cost = gts_job_seeker_monthly_cost;
	}

	public void setGts_job_seeker_bonus_cost(int gts_job_seeker_bonus_cost) {
		this.gts_job_seeker_bonus_cost = gts_job_seeker_bonus_cost;
	}

//	public void setGts_company_id(Long gts_company_id) {
//		this.gts_company_id = gts_company_id;
//	}

	public String getGts_candidate_name() {
		return gts_candidate_name;
	}

	public String getGts_candidate_email_id() {
		return gts_candidate_email_id;
	}

	public String getGts_candidate_mobile_number() {
		return gts_candidate_mobile_number;
	}

//	public Long getGts_project_id() {
//		return gts_project_id;
//	}

	public Long getGts_contract_duration() {
		return gts_contract_duration;
	}

//	@Override
//	public String toString() {
//		return "GtsEmployeePlacementActivity [gts_candidate_id=" + gts_candidate_id + ", gts_candidate_name="
//				+ gts_candidate_name + ", gts_candidate_email_id=" + gts_candidate_email_id
//				+ ", gts_candidate_mobile_number=" + gts_candidate_mobile_number + ", gts_project_manager="
//				+ gts_project_manager + ", gts_project_manager_contact_number=" + gts_project_manager_contact_number
//				+ ", gts_contract_duration=" + gts_contract_duration + ", gts_candidate_salary=" + gts_candidate_salary
//				+ ", gts_job_seeker_monthly_cost=" + gts_job_seeker_monthly_cost + ", gts_job_seeker_bonus_cost="
//				+ gts_job_seeker_bonus_cost + ", gts_requester_name=" + gts_requester_name + ", gts_approver_email_id="
//				+ gts_approver_email_id + ", gts_approver_name=" + gts_approver_name + ", gts_approver_phone_number="
//				+ gts_approver_phone_number + ", gtsCompaniesSet=" + gtsCompaniesSet + ", gtsUserProjectsSet="
//				+ gtsUserProjectsSet + "]";
//	}

	public Long getGts_candidate_salary() {
		return gts_candidate_salary;
	}

	public int getGts_job_seeker_monthly_cost() {
		return gts_job_seeker_monthly_cost;
	}

	public int getGts_job_seeker_bonus_cost() {
		return gts_job_seeker_bonus_cost;
	}

	public String getGts_project_manager() {
		return gts_project_manager;
	}

	public String getGts_project_manager_contact_number() {
		return gts_project_manager_contact_number;
	}

	public String getGts_requester_name() {
		return gts_requester_name;
	}

	public String getGts_approver_email_id() {
		return gts_approver_email_id;
	}

	public String getGts_approver_name() {
		return gts_approver_name;
	}

	public String getGts_approver_phone_number() {
		return gts_approver_phone_number;
	}

//	public int getGts_company_id() {
//		return gts_company_id;
//	}

	public void setGts_candidate_name(String gts_candidate_name) {
		this.gts_candidate_name = gts_candidate_name;
	}

	public void setGts_candidate_email_id(String gts_candidate_email_id) {
		this.gts_candidate_email_id = gts_candidate_email_id;
	}

	public void setGts_candidate_mobile_number(String gts_candidate_mobile_number) {
		this.gts_candidate_mobile_number = gts_candidate_mobile_number;
	}

	public void setGts_project_manager(String gts_project_manager) {
		this.gts_project_manager = gts_project_manager;
	}

	public void setGts_project_manager_contact_number(String gts_project_manager_contact_number) {
		this.gts_project_manager_contact_number = gts_project_manager_contact_number;
	}

	public void setGts_requester_name(String gts_requester_name) {
		this.gts_requester_name = gts_requester_name;
	}

	public void setGts_approver_email_id(String gts_approver_email_id) {
		this.gts_approver_email_id = gts_approver_email_id;
	}

	public void setGts_approver_name(String gts_approver_name) {
		this.gts_approver_name = gts_approver_name;
	}

	public void setGts_approver_phone_number(String gts_approver_phone_number) {
		this.gts_approver_phone_number = gts_approver_phone_number;
	}
//	public Long getGts_user_project_id() {
//		return gts_user_project_id;
//	}
//
//	public void setGts_user_project_id(Long gts_user_project_id) {
//		this.gts_user_project_id = gts_user_project_id;
//	}

}
