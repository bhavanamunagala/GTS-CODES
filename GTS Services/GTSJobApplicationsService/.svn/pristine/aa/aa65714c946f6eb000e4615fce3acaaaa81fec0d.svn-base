package com.gts.JobApplicationService.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "gts_jobs")
public class GtsJobs {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "gts_job_id",nullable = false)
	private Long gtsJobId;
	@Column(name = "gts_job_applicant_first_language",nullable = false)
	private String gtsJobApplicantFirstLanguage;
	@Column(name = "gts_job_applicant_highest_qualification",nullable = false)
	private String gtsJobApplicantHighestQualification;
	@Column(name = "gts_job_city",nullable = false)
	private String gtsJobCity;
	@Column(name = "gts_job_contact_email",nullable = false)
	private String gtsJobContactEmail;
	@Column(name = "gts_job_contact_mobile_number",nullable = false)
	private String gtsJobContactMobileNumber;
	@Column(name = "gts_job_contact_whatsapp_number",nullable = false)
	private String gtsJobContactWhatsappNumber;
	@Column(name = "gts_job_country",nullable = false)
	private String gtsJobCountry;
	@Column(name = "gts_job_description",nullable = false)
	private String gtsJobDescription;
	@Column(name = "gts_job_employer",nullable = false)
	private String gtsJobEmployer;
	@Column(name = "gts_job_expected_hiring_weeks",nullable = false)
	private String gtsJobExceptedHiringWeeks;
	@Column(name = "gts_job_expiry_date",nullable = false)
	private Date gtsJobExpiryDate;
	@Column(name = "gts_job_is_personal_requirement",nullable = false)
	private Boolean gtsJobIsPersonalRequirement;
	@Column(name = "gts_job_is_remote_work",nullable = false)
	private Boolean gtsJobIsRemoteWork;
	@Column(name = "gts_job_min_exp",nullable = false)
	private Integer gtsJobMinExp;
	@Column(name = "gts_job_posted_date",nullable = false)
	private Date gtsJobPostedDate;
	@Column(name = "gts_job_salary",nullable = false)
	private Integer gtsJobSalary;
	@Column(name = "gts_job_salary_currency",nullable = false)
	private String gtsJobSalaryCurrency;
	
	@Column(name = "gts_job_title",nullable = false)
	private String gtsJobTitle;
	@Column(name = "full_time",nullable = false)
	private Boolean fullTime;
	@Column(name = "part_time",nullable = false)
	private Boolean partTime;
	@Column(name = "gts_job_vacancy_closed_numbers",nullable = false)
	private Integer gtsJobVacancyClosedNumbers;
	@Column(name = "gts_job_vacancy_numbers",nullable = false)
	private Integer gtsJobVacancyNumbers;
	@Column(name = "gts_job_updated_date",nullable = false)
	private Date gtsJobUpdatedDate;
	@Column(name = "gts_job_skills",nullable = false)
	private String gtsJobSkills;
	@Column(name = "gts_job_company_id",nullable = false)
	private Long jobCompanyId;
	@Column(name = "gts_job_employer_id",nullable = false)
	private Long jobEmployerId;
	@Column(name="gts_job_city_id",nullable=false)
	private Long gtsJobCityId;
	@Column(name="gts_job_country_id",nullable=false)
	private Long gtsJobCountryId;
	@Column(name="gts_job_salary_duration",nullable=false)
	private Integer gtsJobSalaryDuration;
	public Integer getGtsJobMinExp() {
		return gtsJobMinExp;
	}

	public void setGtsJobMinExp(Integer gtsJobMinExp) {
		this.gtsJobMinExp = gtsJobMinExp;
	}

	public String getGtsJobSkills() {
		return gtsJobSkills;
	}

	public void setGtsJobSkills(String gtsJobSkills) {
		this.gtsJobSkills = gtsJobSkills;
	}

	public Long getJobCompanyId() {
		return jobCompanyId;
	}

	public void setJobCompanyId(Long jobCompanyId) {
		this.jobCompanyId = jobCompanyId;
	}

	public Long getJobEmployerId() {
		return jobEmployerId;
	}

	public void setJobEmployerId(Long jobEmployerId) {
		this.jobEmployerId = jobEmployerId;
	}

	public Long getGtsJobCityId() {
		return gtsJobCityId;
	}

	public void setGtsJobCityId(Long gtsJobCityId) {
		this.gtsJobCityId = gtsJobCityId;
	}

	public Long getGtsJobCountryId() {
		return gtsJobCountryId;
	}

	public void setGtsJobCountryId(Long gtsJobCountryId) {
		this.gtsJobCountryId = gtsJobCountryId;
	}

	public Integer getGtsJobSalaryDuration() {
		return gtsJobSalaryDuration;
	}

	public void setGtsJobSalaryDuration(Integer gtsJobSalaryDuration) {
		this.gtsJobSalaryDuration = gtsJobSalaryDuration;
	}

	public String getGtsJobSalaryDurationUnit() {
		return gtsJobSalaryDurationUnit;
	}

	public void setGtsJobSalaryDurationUnit(String gtsJobSalaryDurationUnit) {
		this.gtsJobSalaryDurationUnit = gtsJobSalaryDurationUnit;
	}

	public String getGtsJobMinExpUnit() {
		return gtsJobMinExpUnit;
	}

	public void setGtsJobMinExpUnit(String gtsJobMinExpUnit) {
		this.gtsJobMinExpUnit = gtsJobMinExpUnit;
	}

	@Column(name="gts_job_salary_duration_unit",nullable=false)
	private String gtsJobSalaryDurationUnit;
	@Column(name="gts_job_min_exp_unit",nullable=false)
	private String gtsJobMinExpUnit;
	
	//@JsonManagedReference
	//@OneToMany(cascade = CascadeType.ALL, mappedBy = "gtsJobId")
	//private Set<GtsJobApplications> GtsJobApplicationsSET = new HashSet<>();

	public GtsJobs() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GtsJobs(Long gtsJobId, String gtsJobApplicantFirstLanguage, String gtsJobApplicantHighestQualification,
			String gtsJobCity, String gtsJobContactEmail, String gtsJobContactMobileNumber,
			String gtsJobContactWhatsappNumber, String gtsJobCountry, String gtsJobDescription, String gtsJobEmployer,
			String gtsJobExceptedHiringWeeks, Date gtsJobExpiryDate, Boolean gtsJobIsPersonalRequirement,
			Boolean gtsJobIsRemoteWork, Integer gtsJobMinExp, Date gtsJobPostedDate, Integer gtsJobSalary,
			String gtsJobSalaryCurrency,   String gtsJobTitle,
			Boolean fullTime, Boolean partTime, Integer gtsJobVacancyClosedNumbers, Integer gtsJobVacancyNumbers,
			Date gtsJobUpdatedDate) {
		super();
		this.gtsJobId = gtsJobId;
		this.gtsJobApplicantFirstLanguage = gtsJobApplicantFirstLanguage;
		this.gtsJobApplicantHighestQualification = gtsJobApplicantHighestQualification;
		this.gtsJobCity = gtsJobCity;
		this.gtsJobContactEmail = gtsJobContactEmail;
		this.gtsJobContactMobileNumber = gtsJobContactMobileNumber;
		this.gtsJobContactWhatsappNumber = gtsJobContactWhatsappNumber;
		this.gtsJobCountry = gtsJobCountry;
		this.gtsJobDescription = gtsJobDescription;
		this.gtsJobEmployer = gtsJobEmployer;
		this.gtsJobExceptedHiringWeeks = gtsJobExceptedHiringWeeks;
		this.gtsJobExpiryDate = gtsJobExpiryDate;
		this.gtsJobIsPersonalRequirement = gtsJobIsPersonalRequirement;
		this.gtsJobIsRemoteWork = gtsJobIsRemoteWork;
		this.gtsJobMinExp = gtsJobMinExp;
		this.gtsJobPostedDate = gtsJobPostedDate;
		this.gtsJobSalary = gtsJobSalary;
		this.gtsJobSalaryCurrency = gtsJobSalaryCurrency;
		
		this.gtsJobTitle = gtsJobTitle;
		this.fullTime = fullTime;
		this.partTime = partTime;
		this.gtsJobVacancyClosedNumbers = gtsJobVacancyClosedNumbers;
		this.gtsJobVacancyNumbers = gtsJobVacancyNumbers;
		this.gtsJobUpdatedDate = gtsJobUpdatedDate;
	}
	/*public Set<GtsJobApplications> getGtsJobApplicationsSET() {
		return GtsJobApplicationsSET;
	}

	public void setGtsJobApplicationsSET(Set<GtsJobApplications> gtsJobApplicationsSET) {
		GtsJobApplicationsSET = gtsJobApplicationsSET;
	}*/


	public Long getGtsJobId() {
		return gtsJobId;
	}

	public void setGtsJobId(Long gtsJobId) {
		this.gtsJobId = gtsJobId;
	}

	public String getGtsJobApplicantFirstLanguage() {
		return gtsJobApplicantFirstLanguage;
	}

	public void setGtsJobApplicantFirstLanguage(String gtsJobApplicantFirstLanguage) {
		this.gtsJobApplicantFirstLanguage = gtsJobApplicantFirstLanguage;
	}

	public String getGtsJobApplicantHighestQualification() {
		return gtsJobApplicantHighestQualification;
	}

	public void setGtsJobApplicantHighestQualification(String gtsJobApplicantHighestQualification) {
		this.gtsJobApplicantHighestQualification = gtsJobApplicantHighestQualification;
	}

	public String getGtsJobCity() {
		return gtsJobCity;
	}

	public void setGtsJobCity(String gtsJobCity) {
		this.gtsJobCity = gtsJobCity;
	}

	public String getGtsJobContactEmail() {
		return gtsJobContactEmail;
	}

	public void setGtsJobContactEmail(String gtsJobContactEmail) {
		this.gtsJobContactEmail = gtsJobContactEmail;
	}

	public String getGtsJobContactMobileNumber() {
		return gtsJobContactMobileNumber;
	}

	public void setGtsJobContactMobileNumber(String gtsJobContactMobileNumber) {
		this.gtsJobContactMobileNumber = gtsJobContactMobileNumber;
	}

	public String getGtsJobContactWhatsappNumber() {
		return gtsJobContactWhatsappNumber;
	}

	public void setGtsJobContactWhatsappNumber(String gtsJobContactWhatsappNumber) {
		this.gtsJobContactWhatsappNumber = gtsJobContactWhatsappNumber;
	}

	public String getGtsJobCountry() {
		return gtsJobCountry;
	}

	public void setGtsJobCountry(String gtsJobCountry) {
		this.gtsJobCountry = gtsJobCountry;
	}

	public String getGtsJobDescription() {
		return gtsJobDescription;
	}

	public void setGtsJobDescription(String gtsJobDescription) {
		this.gtsJobDescription = gtsJobDescription;
	}

	public String getGtsJobEmployer() {
		return gtsJobEmployer;
	}

	public void setGtsJobEmployer(String gtsJobEmployer) {
		this.gtsJobEmployer = gtsJobEmployer;
	}

	public String getGtsJobExceptedHiringWeeks() {
		return gtsJobExceptedHiringWeeks;
	}

	public void setGtsJobExceptedHiringWeeks(String gtsJobExceptedHiringWeeks) {
		this.gtsJobExceptedHiringWeeks = gtsJobExceptedHiringWeeks;
	}

	public Date getGtsJobExpiryDate() {
		return gtsJobExpiryDate;
	}

	public void setGtsJobExpiryDate(Date gtsJobExpiryDate) {
		this.gtsJobExpiryDate = gtsJobExpiryDate;
	}

	public Boolean getGtsJobIsPersonalRequirement() {
		return gtsJobIsPersonalRequirement;
	}

	public void setGtsJobIsPersonalRequirement(Boolean gtsJobIsPersonalRequirement) {
		this.gtsJobIsPersonalRequirement = gtsJobIsPersonalRequirement;
	}

	public Boolean getGtsJobIsRemoteWork() {
		return gtsJobIsRemoteWork;
	}

	public void setGtsJobIsRemoteWork(Boolean gtsJobIsRemoteWork) {
		this.gtsJobIsRemoteWork = gtsJobIsRemoteWork;
	}



	public Date getGtsJobPostedDate() {
		return gtsJobPostedDate;
	}

	public void setGtsJobPostedDate(Date gtsJobPostedDate) {
		this.gtsJobPostedDate = gtsJobPostedDate;
	}

	public Integer getGtsJobSalary() {
		return gtsJobSalary;
	}

	public void setGtsJobSalary(Integer gtsJobSalary) {
		this.gtsJobSalary = gtsJobSalary;
	}

	public String getGtsJobSalaryCurrency() {
		return gtsJobSalaryCurrency;
	}

	public void setGtsJobSalaryCurrency(String gtsJobSalaryCurrency) {
		this.gtsJobSalaryCurrency = gtsJobSalaryCurrency;
	}

	

	public String getGtsJobTitle() {
		return gtsJobTitle;
	}

	public void setGtsJobTitle(String gtsJobTitle) {
		this.gtsJobTitle = gtsJobTitle;
	}

	public Boolean getFullTime() {
		return fullTime;
	}

	public void setFullTime(Boolean fullTime) {
		this.fullTime = fullTime;
	}

	public Boolean getPartTime() {
		return partTime;
	}

	public void setPartTime(Boolean partTime) {
		this.partTime = partTime;
	}

	public Integer getGtsJobVacancyClosedNumbers() {
		return gtsJobVacancyClosedNumbers;
	}

	public void setGtsJobVacancyClosedNumbers(Integer gtsJobVacancyClosedNumbers) {
		this.gtsJobVacancyClosedNumbers = gtsJobVacancyClosedNumbers;
	}

	public Integer getGtsJobVacancyNumbers() {
		return gtsJobVacancyNumbers;
	}

	public void setGtsJobVacancyNumbers(Integer gtsJobVacancyNumbers) {
		this.gtsJobVacancyNumbers = gtsJobVacancyNumbers;
	}

	public Date getGtsJobUpdatedDate() {
		return gtsJobUpdatedDate;
	}

	public void setGtsJobUpdatedDate(Date gtsJobUpdatedDate) {
		this.gtsJobUpdatedDate = gtsJobUpdatedDate;
	}

	
	

}
