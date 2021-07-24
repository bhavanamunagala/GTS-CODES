package com.gts.JobApplicationService.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gts.JobApplicationService.models.GtsJobApplications;
import com.gts.JobApplicationService.models.GtsUsers;

@Transactional
public interface GTS_JOB_APPLICATIONS_Repository extends JpaRepository<GtsJobApplications,Long> {

	List<GtsJobApplications> findBygtsUserId(GtsUsers userId);

	void deleteBygtsUserId(GtsUsers userId);

	

	

}
