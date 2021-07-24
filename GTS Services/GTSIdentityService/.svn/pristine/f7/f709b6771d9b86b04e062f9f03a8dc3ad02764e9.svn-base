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

import com.gts.users.model.request.RolePermissionsRequestModel;
import com.gts.users.model.response.JsonResponseModel;
import com.gts.users.model.response.RolePermissionsMapResponses;
import com.gts.users.repositories.ResponseMessageConstants;
import com.gts.users.services.RolePermissionsMapService;
import com.gts.users.shared.dto.RolePermissionsMapDto;

@RestController
@RequestMapping("api/v1/role_permission_map")
public class RolePermissionsController {
	

	@Autowired
	RolePermissionsMapService rolePermissionsMapService;
	
	//	private static final Logger LOGGER = LoggerFactory.getLogger(RolePermissionsController.class);
	
	
	
	   @GetMapping( produces = { MediaType.APPLICATION_JSON_VALUE })
	   public <T> T getAllMapping(@RequestParam (name= "gts_role_id") long gts_role_id,
			                      @RequestParam(value = "page" , defaultValue = "0") int page,
			                      @RequestParam(value = "limit" , defaultValue = "25") int limit) {
		   
		   RolePermissionsMapResponses returnValue = new RolePermissionsMapResponses();
		   JsonResponseModel returnValue2 = new JsonResponseModel();

		   RolePermissionsMapDto rolePermissionsMapDto = rolePermissionsMapService.getAllMappingByRoleId(gts_role_id,page, limit);
	
		   if(rolePermissionsMapDto == null) {
			    returnValue2.setSuccess(ResponseMessageConstants.getSuccessFalse());
			    returnValue2.setMessage("No Mapping found");
			    returnValue2.setStatus_code(ResponseMessageConstants.getResponse500());
			   
			  return (T) returnValue2;  
		   }
		   
		   
		   return (T) new ModelMapper().map(rolePermissionsMapDto, RolePermissionsMapResponses.class);
	   }
	
	
	
	
	
	  @PostMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	    public ResponseEntity<JsonResponseModel> addPermissionToRole (@RequestBody RolePermissionsRequestModel rolePermissionsRequestModel) {
			 
	    	 JsonResponseModel returnValue = new JsonResponseModel();
			
	   RolePermissionsMapDto  rolePermissionsMapDto = new ModelMapper().map(rolePermissionsRequestModel, RolePermissionsMapDto.class);
			 
	   rolePermissionsMapDto = rolePermissionsMapService.addPermissionToRole(rolePermissionsMapDto);
			 
	   //	   LOGGER.info("Inside the RolePermissionsController  createUser() method"+ rolePermissionsMapDto);
	   
			 if(rolePermissionsMapDto == null) {
				    returnValue.setSuccess("false");
				    returnValue.setMessage("permission can not be added to Role");
				    returnValue.setStatus_code("500");
				    return ResponseEntity.status(500).body(returnValue);
		       }else {
		    	   returnValue.setSuccess("true");
				    returnValue.setMessage("permission/s is added to Role");
				    returnValue.setStatus_code("200"); 
				    return ResponseEntity.status(200).body(returnValue);
		       }
		       
          }
	  
	   @DeleteMapping(path="/roleId" , produces = { MediaType.APPLICATION_JSON_VALUE })
	   public ResponseEntity<JsonResponseModel> deleteMappingWithRoleId(@RequestBody RolePermissionsRequestModel rolePermissionsRequestModel) {
		   
		   JsonResponseModel returnValue = new JsonResponseModel();
		   RolePermissionsMapDto rolePermissionsMapDto  = new ModelMapper().map(rolePermissionsRequestModel, RolePermissionsMapDto.class);
		  
		   rolePermissionsMapDto =    rolePermissionsMapService.deleteMappingWithRoleId(rolePermissionsMapDto);
		  
		   //		   LOGGER.info("Inside the RolePermissionsController  deleteMappingWithRoleId() method"+ rolePermissionsMapDto);
		   
		   if(rolePermissionsMapDto== null) {
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
	   public ResponseEntity<JsonResponseModel> deleteMappingWithId(@RequestBody RolePermissionsRequestModel rolePermissionsRequestModel) {
		   
		   JsonResponseModel returnValue = new JsonResponseModel();
		   RolePermissionsMapDto rolePermissionsMapDto  = new ModelMapper().map(rolePermissionsRequestModel, RolePermissionsMapDto.class);
		  
		   rolePermissionsMapDto =    rolePermissionsMapService.deleteMappingWithId(rolePermissionsMapDto);
		  
		   //		   LOGGER.info("Inside the RolePermissionsController  deleteMappingWithId() method"+ rolePermissionsMapDto);
		   
		   if(rolePermissionsMapDto== null) {
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
}