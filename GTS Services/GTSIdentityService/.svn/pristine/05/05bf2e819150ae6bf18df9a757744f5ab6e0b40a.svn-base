package com.gts.users.passwordreset;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.gts.users.entities.UserEntity;
import com.gts.users.repositories.UserRepository;
import com.gts.users.shared.utils.Utils;

@Service
public class PasswordResetServiceImpl implements PasswordResetService {

	@Autowired
	UserRepository userRepo;
	
	@Autowired
	PasswordResetTokenRepository passwordResetTokenRepo;

	@Autowired
	JavaEmailService1  javaEmailService;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public boolean requestPasswordReset(PasswordResetDto passwordResetDto) {
         
		boolean returnValue = false;
		UserEntity userEntity = userRepo.findByEmail(passwordResetDto.getGts_user_email());
		
		if(userEntity == null) return returnValue;
		
		String token = new Utils().generatePasswordResetToken(String.valueOf(userEntity.getGts_user_id()));
		
		PasswordResetTokenEntity passwordResetTokenEntity = new PasswordResetTokenEntity();
		passwordResetTokenEntity.setGts_password_reset_token(token);
		passwordResetTokenEntity.setGts_user_detials(userEntity);
	
		passwordResetTokenRepo.save(passwordResetTokenEntity);
		
		returnValue = javaEmailService.sendPasswordResetRequest(
				    "Dummy_Name123",
				    userEntity.getGts_user_email(),
				    token);
		
		return returnValue;
	}

	
	@Override
	public boolean resetPassword(PasswordResetDto passwordResetDto) {

		boolean returnValue = false;
		
		if(Utils.hasTokenExpired(passwordResetDto.getToken())) {
			return returnValue;
		}
		PasswordResetTokenEntity passwordResetTokenEntity = passwordResetTokenRepo.findByToken(passwordResetDto.getToken());
		
		if(passwordResetTokenEntity == null) {
			return returnValue;
		}
		
		String encodedNewPassword = bCryptPasswordEncoder.encode(passwordResetDto.getGts_user_new_Password());
		
		UserEntity userEntity = passwordResetTokenEntity.getGts_user_detials();
		
		userEntity.setGts_user_password(encodedNewPassword);
		UserEntity savedUserEntity = userRepo.save(userEntity);
		
		if(savedUserEntity !=null && savedUserEntity.getGts_user_password().equals(encodedNewPassword)) {
			returnValue = true;
		}
		
		passwordResetTokenRepo.delete(passwordResetTokenEntity);
		
		return returnValue;
	}


	@Override
	public boolean updatePassword(PasswordResetDto passwordResetDto) {
          boolean returnValue = false;
          
		UserEntity userEntity = userRepo.findByUserId(passwordResetDto.getGts_user_id());
		
		
		if( userEntity == null) return returnValue;
       
		
	    boolean matches = bCryptPasswordEncoder.matches(passwordResetDto.getGts_user_old_Password(), userEntity.getGts_user_password());
	
	    if(matches) {
		userEntity.setGts_user_password(bCryptPasswordEncoder.encode(passwordResetDto.getGts_user_new_Password()));
		userRepo.save(userEntity);
        
		returnValue = true;
	    
	    }else {
	    
	    	returnValue = false;
	    }
	    	
	    	
		return returnValue;
	

}
}
