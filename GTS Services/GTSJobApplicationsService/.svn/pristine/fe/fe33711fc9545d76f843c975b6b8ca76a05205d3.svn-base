package com.gts.JobApplicationService.models;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
@Table(name = "gts_job_applications")
public class GtsJobApplications {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("gts_job_application_id")
	@Column(name="gts_job_application_id",nullable = false)
	private Long gtsJobApplicationId;
	
	@ManyToOne
	@JsonProperty("gts_job_id")
	@JoinColumn(name="gts_job_id",nullable = false)
	private GtsJobs gtsJobId;
	
	@JsonProperty("gts_job_application_date")
	@Column(name="gts_job_application_date",nullable = false)
	private Date gtsJobApplicationDate;
	
	@ManyToOne
	@JsonProperty("gts_job_applicant_id")
	@JoinColumn(name="gts_user_id",nullable = false)
	private GtsUsers gtsUserId;
	
	@JsonProperty("gts_applicant_proposal")
	@Column(name="gts_applicant_proposal",nullable = false)
	private String gtsApplicantProposal;
	
	@JsonProperty("gts_job_application_status")
	@Column(name="gts_job_application_status",nullable = false)
	private String gtsJobApplicationStatus;
	
	@JsonProperty("gts_job_application_updated_date")
	@Column(name="gts_job_application_updated_date",nullable = false)
	private Date gtsJobApplicationUpdatedDate;
	
	@JsonProperty("gts_job_offered_date")
	@Column(name="gts_job_offered_date",nullable = true)
	private Date gtsJobOfferedDate;
	
	@JsonProperty("is_active")
	@Column(name="is_active",nullable = false)
	private Boolean isActive;
	
	@Column(name="gts_job_position",nullable = false)
	private String gts_job_position;
	
	@Column(name="company_name",nullable = false)
	private String company_name;
	
	@Column(name="gts_job_posted_date",nullable = false)
	private Date gts_job_posted_date;
	
	@Column(name="experience",nullable = false)
	private String experience;
	
	@Column(name="gts_job_location",nullable = false)
	private String gts_job_location;
	
	@Column(name="company_description",nullable = false)
	private String company_description;
	
	@Column(name="is_applied",nullable = false)
	private Boolean is_applied;
	
	@Column(name="is_saved",nullable = false)
	private Boolean is_saved;
	
	@Column(name="gts_job_seeker_status",nullable = false)
	private String gts_job_seeker_status;
	
	public String getGts_job_seeker_status() {
		return gts_job_seeker_status;
	}
	public void setGts_job_seeker_status(String gts_job_seeker_status) {
		this.gts_job_seeker_status = gts_job_seeker_status;
	}
	public String getGts_job_position() {
		return gts_job_position;
	}
	public void setGts_job_position(String gts_job_position) {
		this.gts_job_position = gts_job_position;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public Date getGts_job_posted_date() {
		return gts_job_posted_date;
	}
	public void setGts_job_posted_date(Date gts_job_posted_date) {
		this.gts_job_posted_date = gts_job_posted_date;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getGts_job_location() {
		return gts_job_location;
	}
	public void setGts_job_location(String gts_job_location) {
		this.gts_job_location = gts_job_location;
	}
	public String getCompany_description() {
		return company_description;
	}
	public void setCompany_description(String company_description) {
		this.company_description = company_description;
	}
	public Boolean getIs_applied() {
		return is_applied;
	}
	public void setIs_applied(Boolean is_applied) {
		this.is_applied = is_applied;
	}
	public Boolean getIs_saved() {
		return is_saved;
	}
	public void setIs_saved(Boolean is_saved) {
		this.is_saved = is_saved;
	}
	
	
	public Boolean getIsActive() {
		return isActive;
	}
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
	public Date getGtsJobOfferedDate() {
		return gtsJobOfferedDate;
	}
	public void setGtsJobOfferedDate(Date gtsJobOfferedDate) {
		this.gtsJobOfferedDate = gtsJobOfferedDate;
	}
	
	public GtsJobApplications() {
		super();
		// TODO Auto-generated constructor stub
	}
	public GtsJobApplications(Long gtsJobApplicationId, GtsJobs gtsJobId, Date gtsJobApplicationDate, GtsUsers gtsUserId,
			String gtsApplicantProposal, String gtsJobApplicationStatus, Date gtsJobApplicationUpdatedDate) {
		super();
		System.out.println("3007 - application contructor");
		this.gtsJobApplicationId = gtsJobApplicationId;
		this.gtsJobId = gtsJobId;
		this.gtsJobApplicationDate = gtsJobApplicationDate;
		this.gtsUserId = gtsUserId;
		this.gtsApplicantProposal = gtsApplicantProposal;
		this.gtsJobApplicationStatus = gtsJobApplicationStatus;
		this.gtsJobApplicationUpdatedDate = gtsJobApplicationUpdatedDate;
	}
	public GtsJobs getGtsJobId() {
		return gtsJobId;
	}
	public void setGtsJobId(GtsJobs gtsJobId) {
		this.gtsJobId = gtsJobId;
	}
	public GtsUsers getGtsUserId() {
		return gtsUserId;
	}
	public void setGtsUserId(GtsUsers gtsUserId) {
		this.gtsUserId = gtsUserId;
	}
	public Long getGtsJobApplicationId() {
		return gtsJobApplicationId;
	}
	public void setGtsJobApplicationId(Long gtsJobApplicationId) {
		this.gtsJobApplicationId = gtsJobApplicationId;
	}
	
	public Date getGtsJobApplicationDate() {
		return gtsJobApplicationDate;
	}
	public void setGtsJobApplicationDate(Date gtsJobApplicationDate) {
		this.gtsJobApplicationDate = gtsJobApplicationDate;
	}
	
	public String getGtsApplicantProposal() {
		return gtsApplicantProposal;
	}
	public void setGtsApplicantProposal(String gtsApplicantProposal) {
		this.gtsApplicantProposal = gtsApplicantProposal;
	}
	public String getGtsJobApplicationStatus() {
		return gtsJobApplicationStatus;
	}
	public void setGtsJobApplicationStatus(String gtsJobApplicationStatus) {
		this.gtsJobApplicationStatus = gtsJobApplicationStatus;
	}
	public Date getGtsJobApplicationUpdatedDate() {
		return gtsJobApplicationUpdatedDate;
	}
	public void setGtsJobApplicationUpdatedDate(Date gtsJobApplicationUpdatedDate) {
		this.gtsJobApplicationUpdatedDate = gtsJobApplicationUpdatedDate;
	}
	@Override
	public String toString() {
		return "GtsJobApplications [gtsJobApplicationId=" + gtsJobApplicationId + ", gtsJobId=" + gtsJobId
				+ ", gtsJobApplicationDate=" + gtsJobApplicationDate + ", gtsUserId=" + gtsUserId
				+ ", gtsApplicantProposal=" + gtsApplicantProposal + ", gtsJobApplicationStatus="
				+ gtsJobApplicationStatus + ", gtsJobApplicationUpdatedDate=" + gtsJobApplicationUpdatedDate
				+ ", gtsJobOfferedDate=" + gtsJobOfferedDate + ", isActive=" + isActive + ", gts_job_position="
				+ gts_job_position + ", company_name=" + company_name + ", gts_job_posted_date=" + gts_job_posted_date
				+ ", experience=" + experience + ", gts_job_location=" + gts_job_location + ", company_description="
				+ company_description + ", is_applied=" + is_applied + ", is_saved=" + is_saved
				+ ", gts_job_seeker_status=" + gts_job_seeker_status + "]";
	}
	


}
