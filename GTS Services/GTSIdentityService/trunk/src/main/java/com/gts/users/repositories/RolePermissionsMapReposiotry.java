package com.gts.users.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.gts.users.entities.PermissionEntity;
import com.gts.users.entities.RolePermissionsMapEntity;

@Repository
public interface RolePermissionsMapReposiotry extends PagingAndSortingRepository<RolePermissionsMapEntity, Long>{

	
	@Query(value=" select * from gts_roles_permissions_map where gts_role_id=:f2" , nativeQuery = true)
	List<RolePermissionsMapEntity> findByRoleId(@Param ("f2") long id);
	
	 @Modifying
	 @Transactional
	@Query(value="delete from gts_roles_permissions_map where gts_role_id=:f2" , nativeQuery = true)
	void deleteMappingWithRoleId(@Param ("f2") long id);
}
