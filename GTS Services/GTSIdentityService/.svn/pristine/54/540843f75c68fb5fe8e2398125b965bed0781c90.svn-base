package com.gts.users.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gts.users.entities.PermissionEntity;
@Repository
public interface PermissionRepository extends PagingAndSortingRepository<PermissionEntity, Integer> {

	
	@Query(value=" select * from gts_permission where gts_permission_name=:permissionName" , nativeQuery = true)
	PermissionEntity findByName(@Param ("permissionName") String gts_permission_name);

	@Query(value=" select * from gts_permission where gts_permission_id=:permissionID" , nativeQuery = true)
	PermissionEntity findByPermissionId(@Param ("permissionID") int id);
}
