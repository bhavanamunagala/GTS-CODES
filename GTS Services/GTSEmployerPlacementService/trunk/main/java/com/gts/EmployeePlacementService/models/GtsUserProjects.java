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
@Table(name = "GTS_USER_PROJECTS")
public class GtsUserProjects {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("gts_user_project_id")
	@Column(name = "GTS_USER_PROJECT_ID")
	private Long gtsUserProjectId;
	@JsonProperty("gts_user_employer_name")
	@Column(name = "GTS_USER_EMPLOYER_NAME", nullable = false)
	private String gtsUserEmployerName;
	@JsonProperty("gts_user_employment_type")
	@Column(name = "GTS_USER_EMPLOYMENT_TYPE", nullable = false)
	private String gtsUserEmploymentType;
	@JsonProperty("gts_user_project_skill_ids")
	@Column(name = "GTS_USER_PROJECT_SKILL_IDS", nullable = false)
	private String gtsUserProjectSkillIds;
	@JsonProperty("gts_user_role_description")
	@Column(name = "GTS_USER_ROLE_DESCRIPTION", nullable = false)
	private String gtsUserRoleDescription;
	@JsonProperty("gts_user_role")
	@Column(name = "GTS_USER_ROLE", nullable = false)
	private String gtsUserRole;
	@JsonProperty("gts_user_project_start_date")
	@Column(name = "GTS_USER_PROJECT_START_DATE", nullable = false)
	private String gtsUserProjectStartDate;
	@JsonProperty("gts_user_project_end_date")
	@Column(name = "GTS_USER_PROJECT_END_DATE", nullable = false)
	private String gtsUserProjectEndDate;
	@JsonProperty("gts_user_project_site")
	@Column(name = "GTS_USER_PROJECT_SITE", nullable = false)
	private String gtsUserProjectSite;
	@JsonProperty("gts_user_client")
	@Column(name = "GTS_USER_CLIENT", nullable = false)
	private String gtsUserClient;
	@JsonProperty("gts_user_project_description")
	@Column(name = "GTS_USER_PROJECT_DESCRIPTION", nullable = false)
	private String gtsUserProjectDescription;
	@JsonProperty("gts_user_designation")
	@Column(name = "GTS_USER_DESIGNATION", nullable = false)
	private String gtsUserDesignation;
	@JsonProperty("gts_user_project_location")
	@Column(name = "GTS_USER_PROJECT_LOCATION", nullable = false)
	private String gtsUserProjectLocation;
	@JsonProperty("gts_user_team_size")
	@Column(name = "GTS_USER_TEAM_SIZE", nullable = false)
	private Integer gtsUserTeamSize;

	@JsonProperty("gts_user_id")
	@Column(name = "GTS_USER_ID", nullable = false)
	private long gtsUserId;

	@OneToMany(cascade = CascadeType.PERSIST, mappedBy = "gtsUserProject")
	private Set<GtsEmployeePlacementActivity> gtsEmployeePlacementActivitiesList = new HashSet<>();

	public Set<GtsEmployeePlacementActivity> getGtsEmployeePlacementActivitiesList() {
		return gtsEmployeePlacementActivitiesList;
	}

	public void setGtsEmployeePlacementActivitiesList(
			Set<GtsEmployeePlacementActivity> gtsEmployeePlacementActivitiesList) {
		this.gtsEmployeePlacementActivitiesList = gtsEmployeePlacementActivitiesList;
	}

	public Long getGtsUserId() {
		return gtsUserId;
	}

	public void setGtsUserId(Long gtsUserId) {
		this.gtsUserId = gtsUserId;
	}

	public String getGtsUserEmploymentType() {
		return gtsUserEmploymentType;
	}

	public void setGtsUserEmploymentType(String gtsUserEmploymentType) {
		this.gtsUserEmploymentType = gtsUserEmploymentType;
	}

	public String getGtsUserProjectSkillIds() {
		return gtsUserProjectSkillIds;
	}

	public void setGtsUserProjectSkillIds(String gtsUserProjectSkillIds) {
		this.gtsUserProjectSkillIds = gtsUserProjectSkillIds;
	}

	public String getGtsUserRoleDescription() {
		return gtsUserRoleDescription;
	}

	public void setGtsUserRoleDescription(String gtsUserRoleDescription) {
		this.gtsUserRoleDescription = gtsUserRoleDescription;
	}

	public String getGtsUserRole() {
		return gtsUserRole;
	}

	public void setGtsUserRole(String gtsUserRole) {
		this.gtsUserRole = gtsUserRole;
	}

	public String getGtsUserProjectStartDate() {
		return gtsUserProjectStartDate;
	}

	public void setGtsUserProjectStartDate(String gtsUserProjectStartDate) {
		this.gtsUserProjectStartDate = gtsUserProjectStartDate;
	}

	public String getGtsUserProjectEndDate() {
		return gtsUserProjectEndDate;
	}

	public void setGtsUserProjectEndDate(String gtsUserProjectEndDate) {
		this.gtsUserProjectEndDate = gtsUserProjectEndDate;
	}

	public String getGtsUserProjectSite() {
		return gtsUserProjectSite;
	}

	public void setGtsUserProjectSite(String gtsUserProjectSite) {
		this.gtsUserProjectSite = gtsUserProjectSite;
	}

	public String getGtsUserClient() {
		return gtsUserClient;
	}

	public void setGtsUserClient(String gtsUserClient) {
		this.gtsUserClient = gtsUserClient;
	}

	public String getGtsUserProjectDescription() {
		return gtsUserProjectDescription;
	}

	public void setGtsUserProjectDescription(String gtsUserProjectDescription) {
		this.gtsUserProjectDescription = gtsUserProjectDescription;
	}

	public String getGtsUserDesignation() {
		return gtsUserDesignation;
	}

	public void setGtsUserDesignation(String gtsUserDesignation) {
		this.gtsUserDesignation = gtsUserDesignation;
	}

	public String getGtsUserProjectLocation() {
		return gtsUserProjectLocation;
	}

	public void setGtsUserProjectLocation(String gtsUserProjectLocation) {
		this.gtsUserProjectLocation = gtsUserProjectLocation;
	}

	public Integer getGtsUserTeamSize() {
		return gtsUserTeamSize;
	}

	public void setGtsUserTeamSize(Integer gtsUserTeamSize) {
		this.gtsUserTeamSize = gtsUserTeamSize;
	}

	public Long getGtsUserProjectId() {
		return gtsUserProjectId;
	}

	public void setGtsUserProjectId(Long gtsUserProjectId) {
		this.gtsUserProjectId = gtsUserProjectId;
	}

	public void setGtsUserId(long gtsUserId) {
		this.gtsUserId = gtsUserId;
	}

	public String getGtsUserEmployerName() {
		return gtsUserEmployerName;
	}

	public void setGtsUserEmployerName(String gtsUserEmployerName) {
		this.gtsUserEmployerName = gtsUserEmployerName;
	}

//	@Override
//	public String toString() {
//		return "GtsUserProjects [gtsUserProjectId=" + gtsUserProjectId + ", gtsUserEmployerName=" + gtsUserEmployerName
//				+ ", gtsUserEmploymentType=" + gtsUserEmploymentType + ", gtsUserProjectSkillIds="
//				+ gtsUserProjectSkillIds + ", gtsUserRoleDescription=" + gtsUserRoleDescription + ", gtsUserRole="
//				+ gtsUserRole + ", gtsUserProjectStartDate=" + gtsUserProjectStartDate + ", gtsUserProjectEndDate="
//				+ gtsUserProjectEndDate + ", gtsUserProjectSite=" + gtsUserProjectSite + ", gtsUserClient="
//				+ gtsUserClient + ", gtsUserProjectDescription=" + gtsUserProjectDescription + ", gtsUserDesignation="
//				+ gtsUserDesignation + ", gtsUserProjectLocation=" + gtsUserProjectLocation + ", gtsUserTeamSize="
//				+ gtsUserTeamSize + ", gtsUserId=" + gtsUserId + ", gtsEmployeePlacementActivitySet="
//				+ gtsEmployeePlacementActivitySet + "]";
//	}

	
}
