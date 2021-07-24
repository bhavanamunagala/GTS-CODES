package com.gts.users.services.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Stream;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gts.users.entities.RolePermissionsMapEntity;
import com.gts.users.entities.UserRolesMapEntity;
import com.gts.users.repositories.RolePermissionsMapReposiotry;
import com.gts.users.repositories.RoleRepository;
import com.gts.users.repositories.UserRepository;
import com.gts.users.repositories.UserRolesMapRepository;
import com.gts.users.services.RolePermissionsMapService;
import com.gts.users.services.UserRolesMapService;
import com.gts.users.shared.dto.UserRolesMapDto;

@Service
public class UserRolesMapServiceImpl implements UserRolesMapService {

	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	UserRolesMapRepository userRolesMapRepo;
	
	@Autowired
	private RoleRepository roleRepo;

	@Autowired
	RolePermissionsMapReposiotry  rolePermissionsMapRepo;
	
	@Override
	public UserRolesMapDto  addRoleToUser( UserRolesMapDto userRolesMapDto) {
		
		if(userRepo.findByUserId(userRolesMapDto.getGts_user_id()) == null) return null;
		
		boolean flag = false;
    	  String x = userRolesMapDto.getRoles();
         
          String [] rolesArray  = x.split(",");
          if(rolesArray.length > 2) return null;          // as user can select only 2 roles, so if he select 3 roles then return null

          
		  for(String checkRole : rolesArray) {
			  
			  try {
				  if (roleRepo.findById(Long.parseLong(checkRole)).get() == null)  return null; // hier i am checking if the role is avilable or not 
			
				  if(checkRole.contains(Long.toString(userRolesMapDto.getPrimary_role_id()))) flag = true;   //<- hier
				  
			  } catch(NoSuchElementException e) {
				  return null;
			  }
		  }  
	
           if(flag == false) return null;		  //<-  and hier and above we are checking that if the coming  "primary_role_id"
		                                         // must be same as the selected roles , assume user select roles 1,2
		                                     // it means the "primary_role_id" must be either 1 or 2 , if we pass 3 then 
		                                      // the above boolean flag = false so hier we are returning "null"
    	try {
    		   deleteMappingWithUserId(userRolesMapDto);
		} catch (Exception e) {
		return null;
		}
        
           
    	UserRolesMapEntity userRolesMap = null;
    	List<UserRolesMapEntity> addRoles = new ArrayList<>();
    	
    	 for( int i=0; i<rolesArray.length; i++) {
    		   userRolesMap = new UserRolesMapEntity();
    		   userRolesMap.setGts_user_id(userRolesMapDto.getGts_user_id());
    		  
    		   userRolesMap.setGts_role_id(Long.parseLong(rolesArray[i]));
    		   
    		   if(userRolesMapDto.getPrimary_role_id() == Long.parseLong(rolesArray[i])) {
    		   userRolesMap.setIs_primary(true);
    		   }else {
    			userRolesMap.setIs_primary(false);
    		   }
   	                 
    		   addRoles.add(userRolesMap);
    	 }
    	   
          Iterable<UserRolesMapEntity> ui = userRolesMapRepo.saveAll(addRoles);
    	   Iterator itr = ui.iterator();
    	   if(itr.hasNext()) {
    		   return userRolesMapDto ;
    	   }else
    		   return null;
   	}

	@Override
	public UserRolesMapDto deleteMappingWithUserId(UserRolesMapDto userRolesMapDto) {
		
		 List<UserRolesMapEntity> op =  userRolesMapRepo.findRolesByUserId(userRolesMapDto.getGts_user_id());
              if(op.size() == 0) {
            	  
                return null;	          
			}else
				 userRolesMapRepo.deleteUserById(userRolesMapDto.getGts_user_id());

              userRolesMapDto.setMessage("DELETED");
              return userRolesMapDto;
	    }
	
	
	@Override
	public UserRolesMapDto deleteMappingWithId(UserRolesMapDto userRolesMapDto) {
		 
		Optional<UserRolesMapEntity> op =  userRolesMapRepo.findById(userRolesMapDto.getGts_user_role_id());
			if(op.isPresent())  
			{
  		 userRolesMapRepo.deleteUserById(userRolesMapDto.getGts_user_id());

             userRolesMapDto.setMessage("DELETED");
	               return userRolesMapDto;
			}else
		
		return null;
	}

	@Override
	public UserRolesMapDto getAllMappingWithUserId(long gts_user_id) {
       
      List<UserRolesMapEntity> allRoles = userRolesMapRepo.findRolesByUserId(gts_user_id);
      if(allRoles.size() == 0) return null;
      
      UserRolesMapDto userRolesDto = new UserRolesMapDto();
       
  	   String roles = ""; 
      
         for(int i=0; i<allRoles.size(); i++) {
    	                   
        	UserRolesMapEntity uRMEntity = allRoles.get(i);
        	 
        	userRolesDto.setGts_user_id(uRMEntity.getGts_user_id());
       
           roles +=   Long.toString(uRMEntity.getGts_role_id());
      
           if(uRMEntity.isIs_primary() == true) {
        	  userRolesDto.setPrimary_role_id(uRMEntity.getGts_role_id());
                                         }
          
           if(i == allRoles.size()-1) break;
	         
	         roles += ",";
            
         }
        
         userRolesDto.setRoles(roles);
		
         return userRolesDto;
	}
	
	
	@Override
	public UserRolesMapDto getAllPermissionsWithUserId(long gts_user_id) {

		 
		UserRolesMapDto returnValue = new UserRolesMapDto();
		UserRolesMapDto	userRolesDto = 	getAllMappingWithUserId(gts_user_id);
		
		
		if(userRolesDto.getRoles() == null) {
			returnValue.setMessage("No Permissions found for this User");
		    return returnValue;
		}
            String x = userRolesDto.getRoles();

            String [] rolesArray = x.split(",");
     
		   String permissions = "";
		   
		      for(int i=0; i < rolesArray.length;i++){
		    	
		 List<RolePermissionsMapEntity> allRolePermissions  = rolePermissionsMapRepo.findByRoleId(Long.parseLong(rolesArray[i]));
		      
		           for(int y =0; y<allRolePermissions.size() ; y++) {
		        	   
		        	   RolePermissionsMapEntity  perm =    allRolePermissions.get(y); 
            	      
		        	         permissions +=  Long.toString(perm.getGts_permission_id());    
		           
		        	         if(y== allRolePermissions.size()-1) break;
		        	         
		        	         permissions += ",";
		              }
		           }
                 
	            returnValue.setPermissions(permissions);
                returnValue.setGts_user_id(gts_user_id);	
                returnValue.setMessage("working");
                
		    
		return returnValue;
	}

	
	
	
	
	
	
	

              
}
