package com.gts.users.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gts.users.entities.UserEntity;
import com.gts.users.shared.dto.UserDto;


@Repository
public interface UserRepository extends PagingAndSortingRepository<UserEntity, Long>{

	@Query(value = "select * from gts_users where gts_user_email=:f2", nativeQuery = true)
    UserEntity findByEmail(@Param("f2") String email);
	
	@Query(value = "select * from gts_users where gts_user_id=:f2", nativeQuery = true)
	UserEntity findByUserId(@Param("f2") Long f1);
	
	@Query(value = "select * from gts_users where gts_user_status=:f2", nativeQuery = true)
	List<UserEntity> findByActiveInactiveUser(@Param("f2")  boolean gts_user_status ,Pageable paeging);

	@Query(value = "select * from gts_users where gts_user_emailVerificationToken=:f2", nativeQuery = true)
	UserEntity  findUserByEmailVerificationToken(@Param("f2") String token);
    
	@Transactional
	@Modifying
	@Query(value = "delete  from gts_users where gts_user_id=:f2", nativeQuery = true)
	void deleteUserByUserId(@Param("f2") Long f1); 
	
	@Transactional
	@Modifying
	@Query(value = "delete  from gts_users where gts_user_email=:f2", nativeQuery = true)
	void deleteUserByUserEmail(@Param("f2") String email); 
	
	
	
	
}
