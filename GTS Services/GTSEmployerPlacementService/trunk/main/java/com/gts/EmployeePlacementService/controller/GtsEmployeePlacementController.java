package com.gts.EmployeePlacementService.controller;

import java.util.List;
import java.util.Optional;

import javax.ws.rs.QueryParam;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gts.EmployeePlacementService.models.CandidateId;
import com.gts.EmployeePlacementService.models.CompanyId;
import com.gts.EmployeePlacementService.models.GtsCompany;
import com.gts.EmployeePlacementService.models.GtsEmployeePlacementActivity;
import com.gts.EmployeePlacementService.models.GtsUserProjects;
import com.gts.EmployeePlacementService.models.NoResponseBody;
import com.gts.EmployeePlacementService.models.ProjectId;
import com.gts.EmployeePlacementService.repository.CompaniesRepository;
import com.gts.EmployeePlacementService.repository.EmployeePlacementActivityRepository;
import com.gts.EmployeePlacementService.repository.UserProjectsRepository;

@RestController
public class GtsEmployeePlacementController<T> {

	private static final Logger logger = LoggerFactory.getLogger(GtsEmployeePlacementController.class);

	@Autowired
	EmployeePlacementActivityRepository employeePlacementActivityRepository;
	@Autowired
	UserProjectsRepository userProjectsRepository;
	@Autowired
	CompaniesRepository companiesRepository;

	@GetMapping("api/v1/employeePlacementActivities")
	public <T> T getEmployeePlacementActivities() {

		try {
			List<GtsEmployeePlacementActivity> gtsEmployeePlacementList = employeePlacementActivityRepository.findAll();
			// logger.info("user address"+gtsEmployeePlacementList.toString());

			if (!gtsEmployeePlacementList.isEmpty()) {

				return (T) gtsEmployeePlacementList;
			} else {

				logger.error("No Employee Placement Activities data found");
				return (T) new NoResponseBody("No Employee Placement Activities data found", "false", 404);
			}

		} catch (Exception e) {
			logger.error("No Employee Placement Activities data found");
			e.printStackTrace();
			return (T) new NoResponseBody("No Employee Placement Activities data found ", "false", 404);

		}

	}

	@GetMapping("api/v1/employeePlacementActivity/projectId")
	public <T> T getEmployeePlacementActivityByProjectId(@QueryParam(value = "projectId") Long projectId) {

		try {
			List<GtsEmployeePlacementActivity> gtsEmployeePlacementList = employeePlacementActivityRepository
					.findBygtsUserProjectId(projectId);
			// logger.info("user address"+gtsEmployeePlacementList.toString());

			if (!gtsEmployeePlacementList.isEmpty()) {

				return (T) gtsEmployeePlacementList;
			} else {

				logger.error("No Employee Placement Activities found for ProjectId");
				return (T) new NoResponseBody("No Employee Placement Activities found for ProjectId", "false", 404);
			}

		} catch (Exception e) {
			logger.error("No Employee Placement Activities found for ProjectId");
			e.printStackTrace();
			return (T) new NoResponseBody("No Employee Placement Activities found for ProjectId ", "false", 404);

		}

	}

	@GetMapping("api/v1/employeePlacementActivity/companyId")
	public <T> T getEmployeePlacementActivityByCompanyId(@QueryParam(value = "companyId") Long companyId) {

		try {
			List<GtsEmployeePlacementActivity> gtsEmployeePlacementList = employeePlacementActivityRepository
					.findBygtsCompanyId(companyId);
			// logger.info("user address"+gtsEmployeePlacementList.toString());

			if (!gtsEmployeePlacementList.isEmpty()) {

				return (T) gtsEmployeePlacementList;
			} else {

				logger.error("No Employee Placement Activities found for CompanyId");
				return (T) new NoResponseBody("No Employee Placement Activities found for CompanyId", "false", 404);
			}

		} catch (Exception e) {
			logger.error("No Employee Placement Activities found for CompanyId");
			e.printStackTrace();
			return (T) new NoResponseBody("No Employee Placement Activities found for CompanyId ", "false", 404);

		}

	}

	@GetMapping("api/v1/employeePlacementActivity/candidateId")
	public <T> T getEmployeePlacementActivityByCandidateId(@QueryParam(value = "candidateId") Long candidateId) {

		try {
			Optional<GtsEmployeePlacementActivity> gtsEmployeePlacementActivity = employeePlacementActivityRepository
					.findById(candidateId);
			// logger.info("user address"+gtsEmployeePlacementList.toString());

			if (gtsEmployeePlacementActivity.isPresent()) {

				return (T) gtsEmployeePlacementActivity;
			} else {

				logger.error("No Employee Placement Activities found for CandidateId");
				return (T) new NoResponseBody("No Employee Placement Activities found for CandidateId", "false", 404);
			}

		} catch (Exception e) {
			logger.error("No Employee Placement Activities found for CandidateId");
			e.printStackTrace();
			return (T) new NoResponseBody("No Employee Placement Activities found for CandidateId ", "false", 404);

		}

	}

	@PostMapping(path = "api/v1/employeePlacementActivity", consumes = "application/json")

	public NoResponseBody addEmployeePlacementActivity(
			@RequestBody GtsEmployeePlacementActivity gtsEmployeePlacementActivity) {
		try {
			Optional<GtsCompany> gtsCompanies = companiesRepository
					.findById(gtsEmployeePlacementActivity.getGtsCompanyId());
			Optional<GtsUserProjects> gtsUserProjects = userProjectsRepository
					.findById(gtsEmployeePlacementActivity.getGtsUserProjectId());
			if (gtsCompanies.isPresent() && gtsUserProjects.isPresent()) {
				employeePlacementActivityRepository.save(gtsEmployeePlacementActivity);
				logger.info("Added GtsEmployee Placement Activity ");
				return new NoResponseBody("Added GtsEmployee Placement Activity", "true", 200);

			}

			else {
				return new NoResponseBody("Either Company id or project id is not found, you can't create", "false",
						404);

			}

		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception while adding New GtsEmployee Placement Activity ");
			return new NoResponseBody("Exception while adding New GtsEmployee Placement Activity", "false", 500);
		}
	}

	@PutMapping(path = "api/v1/employeePlacementActivity", consumes = "application/json")

	public NoResponseBody updateEmployeePlacementActivity(
			@RequestBody GtsEmployeePlacementActivity gtsEmployeePlacementActivity) {
		try {
			Optional<GtsCompany> gtsCompanies = companiesRepository
					.findById(gtsEmployeePlacementActivity.getGtsCompanyId());
			Optional<GtsUserProjects> gtsUserProjects = userProjectsRepository
					.findById(gtsEmployeePlacementActivity.getGtsUserProjectId());
			if (gtsCompanies.isPresent() && gtsUserProjects.isPresent()) {
				employeePlacementActivityRepository.save(gtsEmployeePlacementActivity);
				logger.info("Updated GtsEmployee Placement Activity ");
				return new NoResponseBody("Updated GtsEmployee Placement Activity", "true", 200);

			}

			else {
				return new NoResponseBody("Either Company id or project id is not found, you can't update", "false",
						404);

			}

		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception while updating New GtsEmployee Placement Activity ");
			return new NoResponseBody("Exception while updating GtsEmployee Placement Activity", "false", 500);
		}
	}

//
	@DeleteMapping("api/v1/employeePlacementActivity/candidateId")
	public NoResponseBody deleteEmployeePlacementActivityByCandidateId(
			@QueryParam(value = "candidateId") Long candidateId) {
		try {

			if ((employeePlacementActivityRepository.findById(candidateId)).isPresent()) {

				employeePlacementActivityRepository.deleteById(candidateId);
				logger.info("Deleted the EmployeePlacementActivity");
				return new NoResponseBody("Deleted the EmployeePlacementActivity", "true", 200);

			} else {

				logger.error("Employee Placement Activity  doesnot exist for the CandidateId");
				return new NoResponseBody("Employee Placement Activity  doesnot exist for the CandidateId", "false",
						404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception while deleting the Employee Placement Activity");
			return new NoResponseBody("Exception while deleting the Employee Placement Activity", "false", 500);
		}
	}

	@DeleteMapping("api/v1/employeePlacementActivity/projectId")
	public NoResponseBody deleteEmployeePlacementActivityByProjectId(@QueryParam(value = "projectId") Long projectId) {
		try {

			if (!(employeePlacementActivityRepository.findBygtsUserProjectId(projectId)).isEmpty()) {

				employeePlacementActivityRepository.deleteBygtsUserProjectId(projectId);
				logger.info("Deleted the EmployeePlacementActivity");
				return new NoResponseBody("Deleted the EmployeePlacementActivity", "true", 200);

			} else {

				logger.error("Employee Placement Activity  doesnot exist for the ProjectId");
				return new NoResponseBody("Employee Placement Activity  doesnot exist for the ProjectId", "false", 404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception while deleting the Employee Placement Activity");
			return new NoResponseBody("Exception while deleting the Employee Placement Activity", "false", 500);
		}
	}

	@DeleteMapping("api/v1/employeePlacementActivity/companyId")
	public NoResponseBody deleteEmployeePlacementActivityByCompanyId(@QueryParam(value = "companyId") Long companyId) {
		try {

			if (!(employeePlacementActivityRepository.findBygtsCompanyId(companyId)).isEmpty()) {
				logger.info("companyId" + companyId);
				employeePlacementActivityRepository.deleteBygtsCompanyId(companyId);
				logger.info("Deleted the EmployeePlacementActivity");
				return new NoResponseBody("Deleted the EmployeePlacementActivity", "true", 200);

			} else {

				logger.error("Employee Placement Activity  doesnot exist for the CompanyId");
				return new NoResponseBody("Employee Placement Activity  doesnot exist for the CompanyId", "false", 404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception while deleting the Employee Placement Activity");
			return new NoResponseBody("Exception while deleting the Employee Placement Activity", "false", 500);
		}
	}

	@DeleteMapping("api/v1/employeePlacementActivities")
	public NoResponseBody deleteEmployeePlacementActivities() {
		try {
			employeePlacementActivityRepository.deleteAll();
			logger.info("Deleted the EmployeePlacementActivities");
			return new NoResponseBody("Deleted the EmployeePlacementActivities", "true", 200);

		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception while deleting all Employee Placement Activities");
			return new NoResponseBody("Exception while deleting the Employee Placement Activities", "false", 500);
		}
	}

}
