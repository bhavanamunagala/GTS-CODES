package com.gts.users.controllers;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gts.users.model.request.UserRolesMapRequestModel;
import com.gts.users.model.response.JsonResponseModel;
import com.gts.users.model.response.UserPermissionsResponseModel;
import com.gts.users.model.response.UserRolesMapResponseModel;
import com.gts.users.services.UserRolesMapService;
import com.gts.users.shared.dto.UserRolesMapDto;

@RestController
@RequestMapping("api/v1/users/role")
public class UserRolesMapController {
	
	
	@Autowired
	UserRolesMapService userRolesMapService;

	private static final Logger LOGGER = LoggerFactory.getLogger(UserRolesMapController.class);
	
	   @PostMapping( produces = { MediaType.APPLICATION_JSON_VALUE })
	    public <T> T addRoleToUser (@RequestBody UserRolesMapRequestModel usersRolesMapModel) {
			 
		   JsonResponseModel returnValue = new JsonResponseModel();
		   UserRolesMapDto  userRolesMapDto = new ModelMapper().map(usersRolesMapModel, UserRolesMapDto.class);

		   userRolesMapDto =  userRolesMapService.addRoleToUser(userRolesMapDto);
		   
		   //		   LOGGER.info("Inside the UserRolesMapController  addRoleToUser() method"+ userRolesMapDto); 
			
		   if(userRolesMapDto== null) {
				    returnValue.setSuccess("false");
				    returnValue.setMessage("Role is not updated to an user");
				    returnValue.setStatus_code("500");
				    return (T) ResponseEntity.status(500).body(returnValue);
		       }else {
		    	   
		    	    returnValue.setSuccess("true");
				    returnValue.setMessage("Role is updated to an User ");
				    returnValue.setStatus_code("200");
				    return (T) ResponseEntity.status(200).body(returnValue);
		         }	    	 
		       }
	   
	   
	   @DeleteMapping( path= "/userId" , produces = { MediaType.APPLICATION_JSON_VALUE })
	   public ResponseEntity<JsonResponseModel>  deleteMappingWithUserId(@RequestBody UserRolesMapRequestModel usersRolesMapModel) {
		   
		   JsonResponseModel returnValue = new JsonResponseModel();
	
		   UserRolesMapDto userRolesMapDto  = new ModelMapper().map(usersRolesMapModel, UserRolesMapDto.class);
		     userRolesMapDto =    userRolesMapService. deleteMappingWithUserId(userRolesMapDto);
		   
		     //		     LOGGER.info("Inside the UserRolesMapController   deleteMappingWithUserId() method"+ userRolesMapDto); 
	
		     if(userRolesMapDto== null) {
			    returnValue.setSuccess("false");
			    returnValue.setMessage("User-Role mapping cannot be deleted");
			    returnValue.setStatus_code("500");
			    return ResponseEntity.status(500).body(returnValue);
	       }else {
	    	   
	    	    returnValue.setSuccess("true");
			    returnValue.setMessage("User-Role mapping is deleted successfully");
			    returnValue.setStatus_code("200");
			    return  ResponseEntity.status(200).body(returnValue);
	         }
		   
	   }
	   
	   
	   
	   
	   
	   
	   
	   
	   @DeleteMapping( produces = { MediaType.APPLICATION_JSON_VALUE })
	   public ResponseEntity<JsonResponseModel> deleteMappingWithId(@RequestBody UserRolesMapRequestModel usersRolesMapModel) {
		   
		   JsonResponseModel returnValue = new JsonResponseModel();
		   UserRolesMapDto userRolesMapDto  = new ModelMapper().map(usersRolesMapModel, UserRolesMapDto.class);
		  
		     userRolesMapDto =    userRolesMapService.deleteMappingWithId(userRolesMapDto);
		  
		     //		     LOGGER.info("Inside the UserRolesMapController  deleteMappingWithId() method"+ userRolesMapDto); 
		     
		   if(userRolesMapDto== null) {
			    returnValue.setSuccess("false");
			    returnValue.setMessage("User-Role mapping cannot be deleted");
			    returnValue.setStatus_code("500");
			    return ResponseEntity.status(500).body(returnValue);
	       }else {
	    	   
	    	    returnValue.setSuccess("true");
			    returnValue.setMessage("User-Role mapping is deleted successfully");
			    returnValue.setStatus_code("200");
			    return  ResponseEntity.status(200).body(returnValue);
	         }
		   
	   }
	   
	   @GetMapping( produces = { MediaType.APPLICATION_JSON_VALUE })
	   public <T> T getAllMappingWithUserId(@RequestParam (name= "gts_user_id") long gts_user_id) {
		  
		   JsonResponseModel returnValue = new JsonResponseModel();
		   UserRolesMapResponseModel returnValue2 = new UserRolesMapResponseModel();
		   
		   
		   UserRolesMapDto  userRolesMapDto =    userRolesMapService.getAllMappingWithUserId(gts_user_id);
		   
		   //		   LOGGER.info("Inside the UserRolesMapController  getAllMappingWithUserId() method"+ userRolesMapDto); 
		   
		   if(userRolesMapDto == null) {
			   returnValue.setSuccess("false");
			   returnValue.setMessage("No Role Found for this User");
			   returnValue.setStatus_code("500");
			   return (T)ResponseEntity.status(500).body(returnValue);
		   }else {
			 
			    returnValue2 = new ModelMapper().map(userRolesMapDto, UserRolesMapResponseModel.class);
			    return (T) ResponseEntity.status(200).body(returnValue2);
		   }
		  }
	   
	    @GetMapping(path="/api/v1/users/role", produces = { MediaType.APPLICATION_JSON_VALUE })
		public <T> T getAllPermissionsWithUserId(@RequestParam (name= "gts_user_id") long gts_user_id) {
		   
	    	  JsonResponseModel returnValue = new JsonResponseModel();
	    	  UserPermissionsResponseModel returnValue2 = new UserPermissionsResponseModel();
			   
	    	
	    	 UserRolesMapDto userRolesMapDto = 	userRolesMapService.getAllPermissionsWithUserId(gts_user_id);
	    	
	    	 if(userRolesMapDto == null) {
				   returnValue.setSuccess("false");
				   returnValue.setMessage("No Role Found for this User");
				   returnValue.setStatus_code("500");
				   return (T)ResponseEntity.status(500).body(returnValue);
			   }else {
				 
				    returnValue2 = new ModelMapper().map(userRolesMapDto, UserPermissionsResponseModel.class);
				    return (T) ResponseEntity.status(200).body(returnValue2);
			   }
   }
}