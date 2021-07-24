package com.gts.users.controllers;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.gts.users.entities.RoleEntity;
import com.gts.users.model.request.PermissionRequestModel;
import com.gts.users.model.request.RoleRequestModel;
import com.gts.users.model.request.UserDetailsRequestModel;
import com.gts.users.model.response.JsonResponseModel;
import com.gts.users.model.response.NewRoleResponseModel;
import com.gts.users.model.response.RoleResponseModel;
import com.gts.users.model.response.RoleRest;
import com.gts.users.model.response.UserRest;
import com.gts.users.services.RoleService;
import com.gts.users.services.UserService;
import com.gts.users.shared.dto.RoleDto;
import com.gts.users.shared.dto.UserDto;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.netty.http.client.HttpClient;



@RestController
@RequestMapping("api/v1/master_data/role")
public class RoleController {
	
	
	  @Autowired
	  private UserService userService;
	
	@Autowired
	RoleService roleService;
	
	//	private static final Logger LOGGER = LoggerFactory.getLogger(RoleController.class);
	
	@PostMapping( produces = { MediaType.APPLICATION_JSON_VALUE })
	public JsonResponseModel createRole(@RequestBody RoleRequestModel roleRequestModel) {
		
		    JsonResponseModel returnValue = new JsonResponseModel();
		    
		 
		 RoleDto roleDto = new ModelMapper().map(roleRequestModel, RoleDto.class);
		 
		 roleDto = roleService.createRole(roleDto);
		 
		 //		 LOGGER.info("Inside the RoleController  createRole() method"+ roleDto);

		  if(roleDto== null) {
			    returnValue.setSuccess("false");
			    returnValue.setMessage("role can not be created");
			    returnValue.setStatus_code("500");
			    
			    return  returnValue;
	       }else {
	    	     returnValue.setSuccess("true");
			    returnValue.setMessage("role is created sucessfully");
			    returnValue.setStatus_code("201");
			   
			    return  returnValue;
	       }
	       
	  }
	
  	
  	
	 @GetMapping(path="/roleId" , produces = { MediaType.APPLICATION_JSON_VALUE })
     public <T> T	findRolebyId(@RequestParam ( name="gts_role_id") long gts_role_id) {
		 
		 RoleResponseModel returnValue = new RoleResponseModel();
		 JsonResponseModel returnValue2 = new JsonResponseModel();

		 RoleDto   roleDto  = roleService.getRoleById(gts_role_id);
		 
		  //		  LOGGER.info("Inside the RoleController  findRolebyId() method"+ roleDto);
		  
		 if(roleDto == null) {
			    returnValue2.setSuccess("false");
			    returnValue2.setMessage("no record found");
			    returnValue2.setStatus_code("500");
			   
			  return (T) returnValue2;  
		   }
        
		 
		 return (T) new ModelMapper().map(roleDto, RoleResponseModel.class);
	 }
	
	

     @PutMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	 public JsonResponseModel updateRole ( @RequestBody RoleRequestModel roleRequestModel) {
		 
    	 JsonResponseModel returnValue = new JsonResponseModel();
		 
		 ModelMapper modelMapper = new ModelMapper();
		 RoleDto roleDto = modelMapper.map(roleRequestModel, RoleDto.class);
		 
		 roleDto = roleService.updateRole(roleDto);
		 
		 //		 LOGGER.info("Inside the RoleController  updateRole() method"+ roleDto);
		 
		 if(roleDto== null) {
			    returnValue.setSuccess("false");
			    returnValue.setMessage("role can not be updated");
			    returnValue.setStatus_code("500");
	       }else {
	    	   returnValue.setSuccess("true");
			    returnValue.setMessage("role is updated");
			    returnValue.setStatus_code("200"); 
	       }
	       
	    return returnValue;
	  }

     
 /*    
     @PostMapping(value="/addPermission" , produces = { MediaType.APPLICATION_JSON_VALUE })
    public JsonResponseModel addPermissionToRole (@RequestBody RoleRequestModel roleRequestModel) {
		 
    	 JsonResponseModel returnValue = new JsonResponseModel();
		 
		 ModelMapper modelMapper = new ModelMapper();
		 RoleDto  roleDto = modelMapper.map(roleRequestModel, RoleDto.class);
		 
		 roleDto = roleService.addPermissionToRole(roleDto);
		 
		 if(roleDto== null) {
			    returnValue.setSuccess("false");
			    returnValue.setMessage("role can not be updated");
			    returnValue.setStatus_code("500");
	       }else {
	    	   returnValue.setSuccess("true");
			    returnValue.setMessage("role is updated");
			    returnValue.setStatus_code("200"); 
	       }
	       
	    return returnValue;
	  }
   */ 
	   
	   
     @GetMapping (produces = { MediaType.APPLICATION_JSON_VALUE })
     public  <T> T getAllRoles(@RequestParam(value= "page", defaultValue = "0") int page,
    		                          @RequestParam(value="limit", defaultValue = "25") int limit){
    	 
    	 List<RoleResponseModel> returnValue  = new ArrayList<>();
    	 JsonResponseModel returnValue2 = new JsonResponseModel();
    	 
    	 List<RoleDto> allRoles = roleService.getAllRoles(page, limit);
    	 
    	 //  	 LOGGER.info("Inside the RoleController  getAllRoles() method"+ allRoles);
    	 
    	 if(allRoles == null) {
    		 returnValue2.setSuccess("false");
 		     returnValue2.setMessage("no record found");
 		     returnValue2.setStatus_code("500");
			   
			  return (T) returnValue2;  
		   }
    	 for(RoleDto roleDto : allRoles) {
    		 returnValue.add(new ModelMapper().map(roleDto, RoleResponseModel.class));
    	 }
    	 
    	 return (T) returnValue;
     }
     
     @DeleteMapping( produces = { MediaType.APPLICATION_JSON_VALUE })
     public JsonResponseModel deletRole(@RequestBody RoleRequestModel roleRequestModel) {
    	 
    	 JsonResponseModel returnValue = new JsonResponseModel();
    	 RoleDto roleDto = new ModelMapper().map(roleRequestModel, RoleDto.class);
    	 
    	     roleDto = roleService.deleteRoleById(roleDto);
    	     
    	     //  	     LOGGER.info("Inside the RoleController  deletRole() method"+ roleDto);
    	     
    	 
    	  if(roleDto == null) {
			    returnValue.setSuccess("false");
			    returnValue.setMessage("role can not be deleted");
			    returnValue.setStatus_code("500");
	       }else {
			   returnValue.setSuccess("true");
			   returnValue.setMessage("role  deleted szccessfully");
			   returnValue.setStatus_code("200"); 
	       }
		   
		   return returnValue;
     }
     
     @GetMapping(path="/findByName" , produces = { MediaType.APPLICATION_JSON_VALUE })
     public <T> T	findRolebyName(@RequestParam (name = "gts_role_name") String gts_role_name) {
    	 
    	 RoleResponseModel returnValue = new RoleResponseModel();
		 JsonResponseModel returnValue2 = new JsonResponseModel();
		 
        RoleDto  roleDto  = roleService.getRoleByName(gts_role_name);
     
        //        LOGGER.info("Inside the RoleController  findRolebyName() method"+ roleDto);
        
        if(roleDto == null) {
		    returnValue2.setSuccess("false");
		    returnValue2.setMessage("no record found");
		    returnValue2.setStatus_code("500");
		   
		  return (T) returnValue2;  
	   }
    
		 return (T) new ModelMapper().map(roleDto, RoleResponseModel.class);
	 }
     
     
	 }









