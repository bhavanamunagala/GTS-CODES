package com.gts.users.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.gts.users.entities.UserRolesMapEntity;

@Repository
public interface UserRolesMapRepository  extends CrudRepository<UserRolesMapEntity, Long>{

	
	 @Query(value = "select * from gts_user_roles where gts_user_id=:f2", nativeQuery = true)
	 List<UserRolesMapEntity> findRolesByUserId(@Param("f2") long f1);

	 @Modifying
	 @Transactional
	 @Query(value = "DELETE FROM gts_user_roles WHERE gts_user_id=:f2", nativeQuery = true)
	 void deleteUserById(@Param("f2") long gts_user_id);
	 
	 
}
