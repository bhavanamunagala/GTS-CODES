package com.gts.EmployeePlacementService.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gts.EmployeePlacementService.models.GtsEmployeePlacementActivity;
@Repository
@Transactional
public interface EmployeePlacementActivityRepository extends JpaRepository<GtsEmployeePlacementActivity,Long> {



	List<GtsEmployeePlacementActivity> findBygtsUserProjectId(Long gts_user_project_id);

	List<GtsEmployeePlacementActivity> findBygtsCompanyId(Long companyId);

	void deleteBygtsUserProjectId(Long gts_user_project_id);

	void deleteBygtsCompanyId(Long companyId);

}
