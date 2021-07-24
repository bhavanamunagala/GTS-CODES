package com.gts.EmployeePlacementService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gts.EmployeePlacementService.models.GtsUserProjects;

public interface UserProjectsRepository extends JpaRepository<GtsUserProjects,Long> {

}
