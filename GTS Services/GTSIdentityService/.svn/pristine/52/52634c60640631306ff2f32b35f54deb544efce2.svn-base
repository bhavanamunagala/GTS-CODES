package com.gts.users.controllers;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gts.users.model.request.UserDetailsRequestModel;
import com.gts.users.model.response.JsonResponseModel;
import com.gts.users.model.response.UserRest;
import com.gts.users.repositories.ResponseMessageConstants;
import com.gts.users.services.RoleService;
import com.gts.users.services.UserService;
import com.gts.users.shared.dto.UserDto;



@RestController
@RequestMapping("/api/v1/user")
//@CrossOrigin(origins="*")
public class UserController {


	  @Autowired
	  private UserService userService;
	  
	  @Autowired
	  private RoleService roleService;
	  
//	  	  private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
	  
	   @PostMapping( path= "/email", produces = { MediaType.APPLICATION_JSON_VALUE })
       public JsonResponseModel  createUser( @RequestBody  UserDetailsRequestModel userDetails ) throws Exception {
		     System.out.println("1---userDetails"+userDetails);
		     JsonResponseModel returnValue = new JsonResponseModel();
		     
	     	 UserDto userDto = new ModelMapper().map(userDetails, UserDto.class);
	     	System.out.println("2---userDto"+userDto);
		      userDto =  userService.createUser(userDto);
//		      		      LOGGER.info("Inside the UserController  {}  createUser() method ", userDto); 
		      System.out.println("3---userDto"+userDto);
		      if(userDto.getMessage() != null ) {
				    returnValue.setSuccess("false");
				    returnValue.setMessage(userDto.getMessage());
				    returnValue.setStatus_code("500");
		       }else {
				   returnValue.setSuccess(ResponseMessageConstants.getSuccessTrue());
				   returnValue.setMessage(ResponseMessageConstants.getAccountCreatedSuccess());
				   returnValue.setStatus_code(ResponseMessageConstants.getResponse200()); 
		       }
//		      System.out.println("4---returnValue"+returnValue);
		    return returnValue;
	    }
	   
	   @PostMapping( path= "/mobile_number" , produces = { MediaType.APPLICATION_JSON_VALUE })
       public JsonResponseModel  createUser22(@RequestBody  UserDetailsRequestModel userDetails ) throws Exception {
		  
		     JsonResponseModel returnValue = new JsonResponseModel();
		
		     

	     	 UserDto userDto = new ModelMapper().map(userDetails, UserDto.class);
	     	
		      userDto =  userService.createUser22(userDto);
		      //	      LOGGER.info("Inside the UserController  createUser22() method {} " ,userDto); 
		       if(userDto == null) {
				    returnValue.setSuccess(ResponseMessageConstants.getSuccessFalse());
				    returnValue.setMessage(ResponseMessageConstants.getAccountCreatedFailure());
				    returnValue.setStatus_code(ResponseMessageConstants.getResponse500());
		       }else {
				   returnValue.setSuccess(ResponseMessageConstants.getSuccessTrue());
				   returnValue.setMessage(ResponseMessageConstants.getAccountCreatedSuccess());
				   returnValue.setStatus_code(ResponseMessageConstants.getResponse200()); 
		       }
		       
		    return returnValue;
	    }


	
	   @GetMapping(path= "/userId" ,produces = { MediaType.APPLICATION_JSON_VALUE })
	   public <T> T getUser(@RequestParam (name= "gts_user_id") long gts_user_id) {
		   
		   UserRest returnValue = new UserRest();
		   JsonResponseModel returnValue2 = new JsonResponseModel();
		   
		  
		   UserDto    userDto = userService.getUserByid(gts_user_id);
		        //		        LOGGER.info("Inside the UserController getUser()  {} " ,userDto); 
		   if(userDto.getMessage() != null) {
			    returnValue2.setSuccess(ResponseMessageConstants.getSuccessFalse());
			    returnValue2.setMessage(userDto.getMessage());
			    returnValue2.setStatus_code(ResponseMessageConstants.getResponse500());
			   
			  return (T) returnValue2;  
		   }
		   
           returnValue = new ModelMapper().map(userDto, UserRest.class);
		   
		   
		   return (T) returnValue;
	   }
	   
	   
	   @GetMapping(path= "/userEmail",produces = { MediaType.APPLICATION_JSON_VALUE })
	   public <T> T getUserByEmail(@RequestParam (name= "gts_user_email") String gts_user_email) {
		   
		   UserRest returnValue = new UserRest();
		   JsonResponseModel returnValue2 = new JsonResponseModel();
		   
		   
		   UserDto    userDto = userService.getUserByEmail(gts_user_email);
		        //		        LOGGER.info("Inside the UserController  getUserByEmail  {} " ,userDto); 
		   if(userDto.getMessage() != null) {
			    returnValue2.setSuccess(ResponseMessageConstants.getSuccessFalse());
			    returnValue2.setMessage(userDto.getMessage());
			    returnValue2.setStatus_code(ResponseMessageConstants.getResponse500());
			   
			  return (T) returnValue2;  
		   }
		   
           returnValue = new ModelMapper().map(userDto, UserRest.class);
		   
		   
		   return (T) returnValue;
	   }
	   
	   
	   
	   @PutMapping( produces = { MediaType.APPLICATION_JSON_VALUE })
	   public JsonResponseModel updateUser( @RequestBody  UserDetailsRequestModel userDetails ) {
		   
		   JsonResponseModel returnValue = new JsonResponseModel();
		  
		   
	       UserDto userDto = new ModelMapper().map(userDetails, UserDto.class);
		   
		     userDto =  userService.updateUser(userDto);
		     //		     LOGGER.info("Inside the UserController  updateUser()  {} " ,userDto); 
		   if(userDto.getMessage() != null) {
			    returnValue.setSuccess(ResponseMessageConstants.getSuccessFalse());
			    returnValue.setMessage(userDto.getMessage());
			    returnValue.setStatus_code(ResponseMessageConstants.getResponse500());
	       }else {
			   returnValue.setSuccess(ResponseMessageConstants.getSuccessTrue());
			   returnValue.setMessage(ResponseMessageConstants.getAcoountUpdationSuccess());
			   returnValue.setStatus_code(ResponseMessageConstants.getResponse200()); 
	       }
		   
		   return returnValue;
		   
	   }
	  
	   
	//   @PreAuthorize("hasAuthority('CAN_DELETE_ACCOUNT') or # id == principal.userId")
	   @DeleteMapping( produces = { MediaType.APPLICATION_JSON_VALUE })
	   public JsonResponseModel deleteUser( @RequestBody  UserDetailsRequestModel userDetails ) {
		   
		   JsonResponseModel returnValue = new JsonResponseModel();
		   
		   UserDto userDto = new ModelMapper().map(userDetails, UserDto.class);
		    userDto =  userService.deleteUser(userDto);
		    //		    LOGGER.info("Inside the UserController  deleteUser()   {} " ,userDto); 
		   if(userDto.getMessage() != null) {
			    returnValue.setSuccess(ResponseMessageConstants.getSuccessFalse());
			    returnValue.setMessage(userDto.getMessage());
			    returnValue.setStatus_code(ResponseMessageConstants.getResponse500());
	       }else {
			   returnValue.setSuccess(ResponseMessageConstants.getSuccessTrue());
			   returnValue.setMessage("User successfully deleted");
			   returnValue.setStatus_code(ResponseMessageConstants.getResponse200()); 
	       }
		   return returnValue;
	   }
	   
	   
	//   @PreAuthorize("hasAuthority('CAN_GET_LIST_OF_USERS')")
	   @GetMapping( produces = { MediaType.APPLICATION_JSON_VALUE })
	   public <T> T getAllUsers(@RequestParam(value = "page" , defaultValue = "0") int page,
			                    @RequestParam(value = "limit" , defaultValue = "25") int limit) {
		   
		   List<UserRest> returnValue = new ArrayList<>();
		   JsonResponseModel returnValue2 = new JsonResponseModel();
		   ModelMapper modelMapper = new ModelMapper();
		   
		   List<UserDto> allUsers = userService.getAllUsers(page, limit);
	
		   if(allUsers.get(0).getMessage() != null) {
			    returnValue2.setSuccess(ResponseMessageConstants.getSuccessFalse());
			    returnValue2.setMessage(allUsers.get(0).getMessage());
			    returnValue2.setStatus_code(ResponseMessageConstants.getResponse500());
			   
			  return (T) returnValue2;  
		   }
		   
		   for(UserDto userDto : allUsers ) {
			   returnValue.add(modelMapper.map(userDto, UserRest.class));
		   }
		   
		   return (T) returnValue;
	   }
	   
	   
	   @GetMapping(path="/getAllRolesPerms")
	   public <T> T getAllRolesPermsByUserId(@RequestParam (name= "gts_user_id") long gts_user_id) {
		  
		   List<UserRest> returnValue = new ArrayList<>();
		   JsonResponseModel returnValue2 = new JsonResponseModel();
		  
		   
		      List<UserDto> roles  =  userService.getAllRolesPermsByUserId(gts_user_id);
		  
		      if(roles.get(0).getMessage() == null) {
		 
		       roles.forEach((roleDto) -> {
		        	                   returnValue.add(new ModelMapper().map(roleDto, UserRest.class));
		        	                   //		       LOGGER.info("Inside the UserController   getAllRolesPermsByUserId() method  {}", roleDto); 
		              });
		      return (T) returnValue;
		    
		      }else {
		            returnValue2.setSuccess(ResponseMessageConstants.getSuccessFalse());
				    returnValue2.setMessage(roles.get(0).getMessage());
				    returnValue2.setStatus_code(ResponseMessageConstants.getResponse500());
				   
		   return (T) returnValue2;
		      }
	   }
	   
	   
	   @PostMapping(path= "/active_inactive", produces = { MediaType.APPLICATION_JSON_VALUE })
       public JsonResponseModel  makeActivceInactive(@RequestBody  UserDetailsRequestModel userDetails) throws Exception {
		  
		     JsonResponseModel returnValue = new JsonResponseModel();
	     	 UserDto userDto = new ModelMapper().map(userDetails, UserDto.class);
	     	
		      userDto =  userService.makeActivceInactive(userDto);
		      
		      //		      LOGGER.info("Inside the UserController  makeActivceInactive() method", userDto); 
		      
		       if(userDto == null) {
				    returnValue.setSuccess("false");
				    returnValue.setMessage("user can not be updated");
				    returnValue.setStatus_code("500");
		       }else if(userDto.getGts_status_code() == 1) {
				   returnValue.setSuccess("false");
				   returnValue.setMessage("User is already active");
				   returnValue.setStatus_code("500"); 
		       }else if(userDto.getGts_status_code() == 2) {
				   returnValue.setSuccess("false");
				   returnValue.setMessage("User is already Inactive");
				   returnValue.setStatus_code("500");
		       }else {
		    	returnValue.setSuccess("Success");
			    returnValue.setMessage("User is updated successfully");
			    returnValue.setStatus_code("200");
		       }
		    	   
		    return returnValue;
	    }
	   
	   
	   
	   @GetMapping(path= "/getAll_active_inactive",produces = { MediaType.APPLICATION_JSON_VALUE })
	   public <T> T getAllActiveInactiveUsers(@RequestParam (name= "gts_user_status")  boolean gts_user_status,
			                              @RequestParam(value = "page" , defaultValue = "0") int page,
                                          @RequestParam(value = "limit" , defaultValue = "25") int limit) {
		   
		   List<UserRest> returnValue =  new ArrayList<>();
		   JsonResponseModel returnValue2 = new JsonResponseModel();
		   
	//	   UserDto userDto = new ModelMapper().map(userDetails, UserDto.class);
		   
		   List<UserDto>   allUsers = userService.getAllActiveInactiveUsers(gts_user_status, page, limit);
		   //		   LOGGER.info("Inside the UserController  getAllActiveInactiveUsers() method {} ", userDto); 
		   if(allUsers == null) {
			    returnValue2.setSuccess(ResponseMessageConstants.getSuccessFalse());
			    returnValue2.setMessage("Not found user with this User ID");
			    returnValue2.setStatus_code(ResponseMessageConstants.getResponse500());
			   
			  return (T) returnValue2;  
		   }
		   
		   for(UserDto x : allUsers ) {
			   returnValue.add(new ModelMapper().map(x,  UserRest.class));
		   }
		   
		   return (T) returnValue;
	   }
	   
	   
	   
	   @DeleteMapping(path = "/deleteByIdPermanently", produces = { MediaType.APPLICATION_JSON_VALUE })
	   public JsonResponseModel deleteUserPermanently( @RequestBody  UserDetailsRequestModel userDetails ) {
		   
		   JsonResponseModel returnValue = new JsonResponseModel();
		   
		   UserDto userDto = new ModelMapper().map(userDetails, UserDto.class);
		    userDto =  userService.deleteUserByIdPermanently(userDto);
		    //		    LOGGER.info("Inside the UserController  deleteUser()   {} " ,userDto); 
		   if(userDto.isFlag() == false) {
			    returnValue.setSuccess(ResponseMessageConstants.getSuccessFalse());
			    returnValue.setMessage(userDto.getMessage());
			    returnValue.setStatus_code(ResponseMessageConstants.getResponse500());
	       }else {
			   returnValue.setSuccess(ResponseMessageConstants.getSuccessTrue());
			   returnValue.setMessage("User successfully deleted");
			   returnValue.setStatus_code(ResponseMessageConstants.getResponse200()); 
	       }
		   return returnValue;
	   }
	   
	   @DeleteMapping(path = "/deleteByEmailPermanently", produces = { MediaType.APPLICATION_JSON_VALUE })
	   public JsonResponseModel deleteUserByEmailPermanently( @RequestBody  UserDetailsRequestModel userDetails ) {
		   
		   JsonResponseModel returnValue = new JsonResponseModel();
		   
		   UserDto userDto = new ModelMapper().map(userDetails, UserDto.class);
		    userDto =  userService.deleteUserByEmailPermanently(userDto);
		    //		    LOGGER.info("Inside the UserController  deleteUser()   {} " ,userDto); 
		   if(userDto.isFlag() == false) {
			    returnValue.setSuccess(ResponseMessageConstants.getSuccessFalse());
			    returnValue.setMessage(userDto.getMessage());
			    returnValue.setStatus_code(ResponseMessageConstants.getResponse500());
	       }else {
			   returnValue.setSuccess(ResponseMessageConstants.getSuccessTrue());
			   returnValue.setMessage("User successfully deleted");
			   returnValue.setStatus_code(ResponseMessageConstants.getResponse200()); 
	       }
		   return returnValue;
	   }
	   
}
