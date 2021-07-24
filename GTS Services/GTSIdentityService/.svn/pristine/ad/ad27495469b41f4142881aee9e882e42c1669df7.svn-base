package com.gts.users.services.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.gts.users.controllers.UserController;
import com.gts.users.entities.RoleEntity;
import com.gts.users.entities.UserEntity;
import com.gts.users.entities.UserRolesMapEntity;
import com.gts.users.exceptions.UserServiceException;
import com.gts.users.model.response.ErrorMessageEnum;
import com.gts.users.repositories.RolePermissionsMapReposiotry;
import com.gts.users.repositories.UserRepository;
import com.gts.users.repositories.UserRolesMapRepository;
import com.gts.users.security.UserPrincipal;
import com.gts.users.services.UserService;
import com.gts.users.shared.dto.RoleDto;
import com.gts.users.shared.dto.UserDto;
import com.gts.users.validator.EmailValidator;
import com.gts.users.validator.PasswordValidator;



@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	BCryptPasswordEncoder  bCryptPasswordEncoder;
	
	@Autowired
	UserRolesMapRepository userRoleRepo;
	
	@Autowired
	EmailValidator emailValidator;
	
	@Autowired
	PasswordValidator passwordValidator;
	
	@Autowired
	RolePermissionsMapReposiotry rolePermissionsMapRepo;
	
	@Autowired
	UserRolesMapRepository userRoleMapRepo;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		  UserEntity userEntity = userRepo.findByEmail(username);
		  
		  LOGGER.info("Inside the UserServiceImpl loadUserByUsername() method {} ", userEntity); 
		  
		  if(userEntity == null) 
			    
			     throw new UserServiceException(ErrorMessageEnum.NO_RECORD_FOUND.getErrorMessageEnum());
		  
		  if(!userEntity.isGts_user_status()) return null;
		  
		  
	   return  new UserPrincipal(userEntity);
		  
	}
	

	@Override
	public UserDto getUserByEmail(String email) {
  
		  UserDto  returnValue = new UserDto();
		UserEntity userEntity = userRepo.findByEmail(email);
		
		LOGGER.info("Inside the UserServiceImpl  loadUserByUsername() method {} ", userEntity);
		
		 if(userEntity == null) {  
  			  returnValue.setMessage("No User found with this Email address");
                  return returnValue;
  		       }else {
            
		         return new ModelMapper().map(userEntity, UserDto.class);
  		       }
     	}
	
	
	
	@Override
	public UserDto createUser(UserDto userDto) {

		UserDto returnValue = new UserDto();
		
		if(userRepo.findByEmail(userDto.getGts_user_email())  != null) {  
			  returnValue.setMessage("Please enter a new email address this email is already Registered");
                return returnValue;
		}
		
		 ModelMapper modelMapper = new ModelMapper();
		 UserEntity userEntity = modelMapper.map(userDto, UserEntity.class);
		 
//		 LOGGER.info("Inside the UserServiceImpl  createUser() method {} ", userEntity);
//       	  
//		    if(emailValidator.isValid(userDto.getGts_user_email())) {
//		    	userEntity.setGts_user_email(userDto.getGts_user_email());
//		    }else {
//		    	  returnValue.setMessage("Please Enter Valid Email address");
//  		    	 return returnValue; 
//		    }
//		   
//		    if(passwordValidator.isValid(userDto.getGts_user_password())) {
//		    
//      	    userEntity.setGts_user_password(bCryptPasswordEncoder.encode(userDto.getGts_user_password()));
//		    }else {
//		    	returnValue.setMessage("Please enter valid Password");
//		    	return returnValue;
//		    }
//      	    
      	    userEntity.setGts_user_login_tries(0);
  	     	UserEntity  storedUserDetails = userRepo.save(userEntity);

         	return modelMapper.map(storedUserDetails, UserDto.class);
	}

	@Override
	public UserDto createUser22(UserDto userDto) {

		if(userRepo.findByEmail(userDto.getGts_user_email())  != null)   return null;
	
		 ModelMapper modelMapper = new ModelMapper();
		 UserEntity userEntity = modelMapper.map(userDto, UserEntity.class);
		 
		 LOGGER.info("Inside the UserServiceImpl  createUser22() method {} ", userEntity);
       	  
      	    userEntity.setGts_user_password(bCryptPasswordEncoder.encode(userDto.getGts_user_password()));


  	     	UserEntity  storedUserDetails = userRepo.save(userEntity);

          	return  modelMapper.map(storedUserDetails, UserDto.class);
	}
	
	
	
	
	
	   @Override
	    public UserDto getUserByid(long gts_user_id) {
		   
		       UserDto returnValue = new UserDto();
             UserEntity userEntity = userRepo.findByUserId(gts_user_id);
             
             LOGGER.info("Inside the UserServiceImpl getUserByid() method {} ", userEntity);
             
             if(userEntity == null) {  
   			  returnValue.setMessage("No User found with this Email id");
                   return returnValue;
   		       }else {
             
		         return new ModelMapper().map(userEntity, UserDto.class);
   		       }
             } 


	    @Override
	    public UserDto updateUser(UserDto userDto) {

	    	UserDto returnValue = new UserDto();
	    	UserEntity userEntity  = userRepo.findByUserId(userDto.getGts_user_id());
	    	
	    	LOGGER.info("Inside the UserServiceImpl updateUser() method {} ", userEntity);
	    	
	    	if(userEntity == null) {  
	   			  returnValue.setMessage("Please enter a valid user id");
	               return returnValue;
	    	}
	    	
	    	if(!passwordValidator.isValid(userDto.getGts_user_password())) {
	    		 returnValue.setMessage("Please enter a valid password");
	               return returnValue;
	    	}else {       
	         	userEntity.setGts_user_password(bCryptPasswordEncoder.encode(userDto.getGts_user_password()));
	         	UserEntity updatedUser = userRepo.save(userEntity);
      	    	return new ModelMapper().map(updatedUser, UserDto.class);
	    	}
	    }

		@Override
		public UserDto deleteUser(UserDto userDto) {
			UserDto returnValue = new UserDto();
			  UserEntity userEntity = userRepo.findByUserId(userDto.getGts_user_id());
			
			  LOGGER.info("Inside the UserServiceImpl deleteUser() method {} ", userEntity);
			  
			  if(userEntity == null) {  
	   			  returnValue.setMessage("Please enter a valid user id");
	               return returnValue;
			  }
				         
			  if(userEntity.isGts_user_status() == false) {
			  returnValue.setMessage("User is already deactivated");
              return returnValue;
		           }
			  
			  userEntity.setGts_user_status(false);
			  
			  UserEntity updatedUser = userRepo.save(userEntity);
		    	
			  return new ModelMapper().map(updatedUser, UserDto.class);
		}


		@Override
		public List<UserDto> getAllUsers(int page, int limit) {
			 
			UserDto userDto = new UserDto();
			 List<UserDto> returnValue = new ArrayList<>();
			 ModelMapper modelMapper  = new ModelMapper();
			 
			 if(page > 0) page -=1;      
                                     
                         
			 Pageable pageableRequest   = PageRequest.of(page, limit);
			
			 Page<UserEntity> usersPage = userRepo.findAll(pageableRequest);
			 
	
			 
			 if(usersPage == null) {  
	   			   userDto.setMessage("No record found");
	               returnValue.add(userDto);
	               return returnValue;
	               
			  }
			 List<UserEntity> users = usersPage.getContent();
			
			 
			 for(UserEntity userEntity : users) {
                 returnValue.add(modelMapper.map(userEntity, UserDto.class));
			 }
			 
			
			return returnValue;
		}

		@Override
		public List<UserDto> getAllRolesPermsByUserId(long gts_user_id) {

			   UserDto userDto  = new UserDto();
			  List<UserDto> returnValue = new ArrayList<>();
			
			  UserEntity  userEntity  =  userRepo.findByUserId(gts_user_id);
			  
			  if(userEntity == null) { 
				  userDto.setMessage("No user found with this user Id");
				     returnValue.add(userDto);
				  return returnValue;
			  }
			  
			  List<RoleEntity> roles1 =	userEntity.getRoles();
			  
			  if(roles1.isEmpty()) {
			  userDto.setMessage("No Roles found for this user id");
			     returnValue.add(userDto);
			  return returnValue;
		  }
			
		      roles1.forEach((role2) ->{
		    	                    returnValue.add(new ModelMapper().map(userEntity, UserDto.class)) ;
		                 
		              });
			return returnValue;
		}

		@Override
		public UserDto makeActivceInactive(UserDto userDto) {
			
			UserEntity updatedUser = null;
			UserDto returnValue = new UserDto();
			
			UserEntity userEntity  = userRepo.findByUserId(userDto.getGts_user_id());  
	    	if(userEntity == null)   return null;
	    	
			if(userDto.isGts_user_status() == true) {
				
				if(userEntity.isGts_user_status() == true) {
					returnValue.setMessage("User Status is already Active");
					returnValue.setGts_status_code(1);;
			      return returnValue;
				}
				
		    	userEntity.setGts_user_status(userDto.isGts_user_status());
		    	
		    	updatedUser = userRepo.save(userEntity);
		    	
		        LOGGER.info("Inside the UserServiceImpl  makeActivceInactive() method {} ", updatedUser);
		    	
     			return new ModelMapper().map(updatedUser, UserDto.class);
			}else {
	             	
				if(userEntity.isGts_user_status() == false) {
					returnValue.setMessage("User Status is already Inactive");
					returnValue.setGts_status_code(2);
			      return returnValue;
				}
				
				userEntity.setGts_user_status(userDto.isGts_user_status());
                 updatedUser = userRepo.save(userEntity);
		    	
     			return new ModelMapper().map(updatedUser, UserDto.class);
			}
		}
			
		@Override
		public List<UserDto> getAllActiveInactiveUsers(boolean gts_user_status, int page , int limit) {

			List<UserDto> returnValue = new ArrayList<>();
			 ModelMapper modelMapper  = new ModelMapper();
			 
			 if(page > 0) page -=1;      
                                     
			 Pageable pageableRequest   = PageRequest.of(page, limit);
			
			 List<UserEntity> usersPage = userRepo.findByActiveInactiveUser(gts_user_status,pageableRequest);
			 
			 System.out.println(usersPage);
			 if(usersPage == null) return null;
			 
			 
			 for(UserEntity userEntity : usersPage) {
                 returnValue.add(modelMapper.map(userEntity, UserDto.class));
                 LOGGER.info("Inside the UserServiceImpl  getAllActiveInactiveUsers() method {} ", userEntity);
			 }
			return returnValue;
		}


		@Override
		public UserDto deleteUserByIdPermanently(UserDto userDto) {
			UserDto returnValue = new UserDto();
			  UserEntity userEntity = userRepo.findByUserId(userDto.getGts_user_id());
			
			  if(userEntity == null) {  
	   			  returnValue.setMessage("Please enter a valid user id");
	   			  returnValue.setFlag(false);
	               return returnValue;
			  }
			  try {
				  
				  List<RoleEntity> roles1 =	userEntity.getRoles();
                  
				  roles1.forEach((role) -> {
					             role.getPermissions().forEach((permission)-> {
					              rolePermissionsMapRepo.deleteMappingWithRoleId(role.getGts_role_id());
					             });
				                });
                     			
				  userRoleMapRepo.deleteUserById(userEntity.getGts_user_id()); 
			
			   userRepo.deleteUserByUserId(userEntity.getGts_user_id());
			  
			  }catch(Exception e) {

				     returnValue.setMessage("User can not be deleted");
	                 returnValue.setFlag(false);
				     return returnValue;
			  }
			  
			  returnValue.setMessage("User is Permanently Deleted");
              return returnValue;
		}


		@Override
		public UserDto deleteUserByEmailPermanently(UserDto userDto) {
			UserDto returnValue = new UserDto();
			  UserEntity userEntity = userRepo.findByEmail(userDto.getGts_user_email());
			
			  if(userEntity == null) {  
	   			  returnValue.setMessage("Please enter a valid user id");
	   			returnValue.setFlag(false);
	               return returnValue;
			  }
			  try {
				  
				  List<RoleEntity> roles1 =	userEntity.getRoles();
				  
				  roles1.forEach((role) -> {
					             role.getPermissions().forEach((permission)-> {
					              rolePermissionsMapRepo.deleteMappingWithRoleId(role.getGts_role_id());
					             });
				        });
			   userRoleMapRepo.deleteUserById(userEntity.getGts_user_id()); 
			
				  userRepo.deleteUserByUserEmail(userEntity.getGts_user_email());
			
			  }catch(Exception e) {
				     returnValue.setMessage("User can not be deleted");
				     returnValue.setFlag(false);
				     return returnValue;
			  }
			  
			  returnValue.setMessage("User is Permanently Deleted");
            return returnValue;
		}


	


	
}




