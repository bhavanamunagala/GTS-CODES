package com.gts.users.passwordreset;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PasswordResetTokenRepository extends CrudRepository<PasswordResetTokenEntity, Long> {

	@Query(value = "select * from password_reset_tokens where gts_password_reset_token=:f2", nativeQuery = true)
	PasswordResetTokenEntity findByToken(@Param("f2") String token);
	
}
