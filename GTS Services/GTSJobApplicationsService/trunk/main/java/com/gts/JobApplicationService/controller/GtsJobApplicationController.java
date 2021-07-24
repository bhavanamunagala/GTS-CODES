package com.gts.JobApplicationService.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.ws.rs.QueryParam;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gts.JobApplicationService.models.GtsJobApplications;
import com.gts.JobApplicationService.models.NoResponseBody;
import com.gts.JobApplicationService.repository.GTS_JOB_APPLICATIONS_Repository;
import com.gts.JobApplicationService.repository.GtsJobRepository;
import com.gts.JobApplicationService.repository.GtsUserRepository;

@RestController
@CrossOrigin(origins="*")

public class GtsJobApplicationController<T> {

	private static final Logger logger = LoggerFactory.getLogger(GtsJobApplicationController.class);
	@Autowired
	GTS_JOB_APPLICATIONS_Repository gtsJobApplicationsRepository;
	
	@Autowired
	GtsJobRepository gtsJobRepository;

	@Autowired
	GtsUserRepository gtsUserRepository;

	@GetMapping("api/v1/jobs/application/{userId}")
	public <T> T getJobApplicationsByUserId(@PathVariable("userId") Long userId) {
//		Long GTS_USER_ID=userId.getUserId();
		try {
			List<GtsJobApplications> gtsJobApplicationlist = gtsJobApplicationsRepository
					.findBygtsUserId(gtsUserRepository.findById(userId).orElseThrow());
			if (gtsJobApplicationlist.isEmpty()) {
				logger.error("No Job applications for the particular UserId");
				return (T) new NoResponseBody("No Job applications for the particular UserId", "false", 404);
			} else {
				logger.info("Job Applications are" + gtsJobApplicationlist.toString());
				return (T) gtsJobApplicationlist;

			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("No Job Applications for the particular UserId");
			return (T) new NoResponseBody("No Job applications for the particular UserId", "false", 404);

		}

	}

	@GetMapping("api/v1/jobs/application")
	public <T> T getJobApplicationByJobApplicationId(@QueryParam(value = "jobApplicationId") Long jobApplicationId) {

		Optional<GtsJobApplications> gtsJobApplications;
		try {
			gtsJobApplications = gtsJobApplicationsRepository.findById(jobApplicationId);
			logger.info("user address" + gtsJobApplications.toString());

			if (gtsJobApplications.isPresent()) {

				return (T) gtsJobApplications;
			} else {

				logger.error("No Job applications for the particular JobApplicationId");
				return (T) new NoResponseBody("No Job applications for the particular JobApplicationId", "false", 404);
			}

		} catch (Exception e) {
			logger.error("No Job applications for the particular JobApplicationId");
			e.printStackTrace();
			return (T) new NoResponseBody("No Job applications for the particular JobApplicationId ", "false", 404);

		}

	}

	@GetMapping("api/v1/jobs/applications")
	public <T> T getAllJobApplications() {
		List<GtsJobApplications> gtsJobApplicationsList = new ArrayList<>();
		Optional<GtsJobApplications> gtsJobApplications;
		try {
			gtsJobApplicationsList = gtsJobApplicationsRepository.findAll();
			logger.info("gts Job Application List is" + gtsJobApplicationsList.toString());

			if (gtsJobApplicationsList.isEmpty()) {
				logger.error("No Job applications found");
				return (T) new NoResponseBody("No Job applications found", "false", 404);
			} else {

				return (T) gtsJobApplicationsList;
			}

		} catch (Exception e) {
			logger.error("No Job applications for the particular JobApplicationId");
			e.printStackTrace();
			return (T) new NoResponseBody("No Job applications for the particular JobApplicationId ", "false", 404);

		}

	}

	@PostMapping(path = "api/v1/jobs/application", consumes = "application/json")

	public NoResponseBody addJobApplication(@RequestBody GtsJobApplications gtsJobApplications) {
		try {
			if (gtsJobRepository.findById(gtsJobApplications.getGtsJobId().getGtsJobId()).isPresent()) {
				gtsJobApplicationsRepository.save(gtsJobApplications);
				logger.info("Added new Job Application ");
				return new NoResponseBody("Added New Job Application", "true", 200);
			} else {
				return new NoResponseBody("job id doesnt exist and you can't create", "false", 404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception while adding New Job Application ");
			return new NoResponseBody("Exception while adding New Job Application", "false", 500);
		}
	}

	@PutMapping(path = "api/v1/jobs/application", consumes = "application/json")
	public NoResponseBody updateJobApplication(@RequestBody GtsJobApplications gtsJobApplications) {
		try {
			if (gtsJobRepository.findById(gtsJobApplications.getGtsJobId().getGtsJobId()).isPresent()) {
				gtsJobApplicationsRepository.save(gtsJobApplications);
				logger.info("Updated the Job Application ");
				return new NoResponseBody("updated the Job Application", "true", 200);
			} else {
				return new NoResponseBody("job id doesnt exist and you can't update", "true", 404);
			}

		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception while updating Job Application");
			return new NoResponseBody("Exception while updating Job Application", "false", 500);
		}
	}

//
	@DeleteMapping("api/v1/jobs/application")
	public NoResponseBody deleteJobApplicationByJobApplicationId(
			@QueryParam(value = "jobApplicationId") Long jobApplicationId) {
		try {

			if ((gtsJobApplicationsRepository.findById(jobApplicationId).isPresent())) {

				gtsJobApplicationsRepository.deleteById(jobApplicationId);
				logger.info("Deleted the Job Application");
				return new NoResponseBody("Deleted the Job Application", "true", 200);

			} else {

				logger.error("Job Application doesnot exist for the JobApplicationId");
				return new NoResponseBody("Job Application doesnot exist for the JobApplicationId", "false", 404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception while deleting the Job Application");
			return new NoResponseBody("Exception while deleting the Job Application", "false", 500);
		}
	}

	@DeleteMapping("api/v1/jobs/applications")
	public NoResponseBody deleteAllJobApplications() {
		try {
			gtsJobApplicationsRepository.deleteAll();
			return new NoResponseBody("Successfully deleted all  Job Applications", "false", 200);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception while deleting All the Job Applications");
			return new NoResponseBody("Exception while deleting All Job Applications", "false", 500);
		}
	}

	@DeleteMapping("api/v1/jobs/applications/user_id")
	public NoResponseBody deleteJobApplicationsByUserId(@QueryParam(value = "userId") Long userId) {

		try {
			 List<GtsJobApplications> gtsJobApplicationlist = gtsJobApplicationsRepository.findBygtsUserId(gtsUserRepository.findById(userId).orElseThrow());

			if (gtsJobApplicationlist.isEmpty()) {
				logger.error("Work Experience doesnot exist for the UserId");
				return new NoResponseBody(" Job applications doesnot exist for the UserId", "false", 404);
			}

			else {
				gtsJobApplicationsRepository.deleteBygtsUserId(gtsUserRepository.findById(userId).orElseThrow());
				logger.info("Deleted the Work Experience");
				return new NoResponseBody("Deleted the Job applications by user id", "true", 200);
			}

		} catch (Exception e) {
			e.printStackTrace();
			logger.error("Exception while deleting the Work Experience");
			return new NoResponseBody("Exception while deleting Job applications by user id", "false", 500);

		}

	}

}
