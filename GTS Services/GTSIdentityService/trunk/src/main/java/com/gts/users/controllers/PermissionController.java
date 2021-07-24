package com.gts.users.controllers;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gts.users.model.request.PermissionRequestModel;
import com.gts.users.model.response.JsonResponseModel;
import com.gts.users.model.response.PermissionResponseModel;
import com.gts.users.services.PermissionService;
import com.gts.users.shared.dto.PermissionDto;

@RestController
@RequestMapping("/api/v1/permission")
public class PermissionController {

	@Autowired
	PermissionService permService;
	
	//	private static final Logger LOGGER = LoggerFactory.getLogger(PermissionController.class);
	
	@PostMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	public JsonResponseModel createPermission(@RequestBody PermissionRequestModel permRequestModel) {
		
		JsonResponseModel returnValue = new JsonResponseModel();
		 
		 ModelMapper modelMapper = new ModelMapper();
		 PermissionDto permissionDto = modelMapper.map(permRequestModel, PermissionDto.class);
		 
		 permissionDto = permService.createPermission(permissionDto);

//		 LOGGER.info("Inside the PermissionController  createPermission() method"+permissionDto); 
		 
		 if(permissionDto == null) {
			    returnValue.setSuccess("False");
			    returnValue.setMessage("Permission details can not be null");
			    returnValue.setStatus_code("500");
	       }
		 if(permissionDto.getGts_permission_name() == null || permissionDto.getGts_permission_name() == "") {
			    returnValue.setSuccess("False");
			    returnValue.setMessage("Permission name should not be empty");
			    returnValue.setStatus_code("400");
	       }else {
	    	   returnValue.setSuccess("True");
			    returnValue.setMessage("Permission added successfully");
			    returnValue.setStatus_code("201"); 
	       }
	       
	    return returnValue;
	  }

	 @GetMapping( value="/permissionId" , produces = { MediaType.APPLICATION_JSON_VALUE })
     public <T> T findPermissionById(@RequestParam (name= "gts_permission_id") int gts_permission_id) {
		 
		 PermissionResponseModel returnValue = new PermissionResponseModel();
		 JsonResponseModel returnValue2 = new JsonResponseModel();
		 
		 
		 PermissionDto permissionDto  = permService.getPermissionById(gts_permission_id);
        
//         LOGGER.info("Inside the PermissionController  findPermissionById() method"+permissionDto); 
         
        if(permissionDto == null) {
		    returnValue2.setSuccess("false");
		    returnValue2.setMessage("no record found");
		    returnValue2.setStatus_code("500");
		   
		  return (T) returnValue2;  
	   }
        
		 return (T) new ModelMapper().map(permissionDto, PermissionResponseModel.class);
	 }
	 
	 
	 
	 @PutMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	 public JsonResponseModel updatePermissionById (@RequestBody PermissionRequestModel permRequestModel) {
		 
		 JsonResponseModel returnValue = new JsonResponseModel();
		 
		 PermissionDto permissionDto = new ModelMapper().map(permRequestModel, PermissionDto.class);
		 
		 permissionDto = permService.updatePermission(permissionDto);
 
//		  LOGGER.info("Inside the PermissionController  updatePermissionById () method"+permissionDto); 
		 
		 if(permissionDto == null) {
			    returnValue.setSuccess("false");
			    returnValue.setMessage("permission can not be updated");
			    returnValue.setStatus_code("500");
	       }else {
	    	   returnValue.setSuccess("true");
			    returnValue.setMessage("permission is updated");
			    returnValue.setStatus_code("200"); 
	       }
	       
	    return returnValue;
	  }
	
	 
	 
	 @DeleteMapping( produces = { MediaType.APPLICATION_JSON_VALUE })
     public JsonResponseModel deletPermission(@RequestBody PermissionRequestModel permRequestModel) {
    
	     JsonResponseModel  returnValue = new JsonResponseModel();
	     PermissionDto permissionDto = new ModelMapper().map(permRequestModel, PermissionDto.class);
	     permissionDto  = permService.deletePermission(permissionDto );
	 
	     //	     LOGGER.info("Inside the PermissionController  deletPermission() method"+permissionDto); 
	     
	  if(permissionDto == null) {
		    returnValue.setSuccess("false");
		    returnValue.setMessage("permission can not be deleted");
		    returnValue.setStatus_code("500");
       }else {
		   returnValue.setSuccess("true");
		   returnValue.setMessage("permission deleted sucessfully");
		   returnValue.setStatus_code("200"); 
       }
	   
	   return returnValue;
         }
	 
	 
	 @GetMapping (produces = { MediaType.APPLICATION_JSON_VALUE })
     public <T> T getAllPermissions(@RequestParam(value= "page", defaultValue = "0") int page,
    		                          @RequestParam(value="limit", defaultValue = "25") int limit){
    	 
    	 List<PermissionResponseModel> returnValue  = new ArrayList<>();
    	 JsonResponseModel returnValue2 = new JsonResponseModel();
    	 
    	 List<PermissionDto> allPermissions = permService.getAllPermissions(page, limit);
    	 
    	 //  	 LOGGER.info("Inside the PermissionController  getAllPermissions() method"+allPermissions); 
    	 
    	 if(allPermissions == null) {
    		 returnValue2.setSuccess("false");
 		     returnValue2.setMessage("no records found");
 		     returnValue2.setStatus_code("500");
			   
			  return (T) returnValue2;  
		   }
    	 
    	 for(PermissionDto permissionDto : allPermissions) {
    		 returnValue.add(new ModelMapper().map(permissionDto, PermissionResponseModel.class));
    	 }
    	 
    	 return (T) returnValue;
     }
	 
	 @GetMapping(path="/findByName" , produces = { MediaType.APPLICATION_JSON_VALUE })
     public <T> T	findPermissionbyName(@RequestParam (name= "gts_permission_name") String gts_permission_name) {
		 
		 PermissionResponseModel returnValue = new PermissionResponseModel();
		 JsonResponseModel returnValue2 = new JsonResponseModel();
		 
		 PermissionDto  permissionDto  = permService.getPermissionByName(gts_permission_name);
        
		 //		 LOGGER.info("Inside the PermissionController findPermissionbyName() method"+permissionDto); 
		 
		 if(permissionDto == null) {
			    returnValue2.setSuccess("false");
			    returnValue2.setMessage("no record found");
			    returnValue2.setStatus_code("500");
			   
			  return (T) returnValue2;  
		   }
		 
		 
		 
		 return (T) new ModelMapper().map(permissionDto, PermissionResponseModel.class);
	 }
	 
	 }
	 
	 
	 

