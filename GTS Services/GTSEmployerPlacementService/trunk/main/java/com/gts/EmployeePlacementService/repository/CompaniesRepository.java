package com.gts.EmployeePlacementService.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gts.EmployeePlacementService.models.GtsCompany;

public interface CompaniesRepository extends JpaRepository<GtsCompany,Long> {

}
