package com.gts.users.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.gts.users.entities.RoleEntity;
import com.gts.users.entities.RolePermissionsMapEntity;
import com.gts.users.entities.UserEntity;
import com.gts.users.entities.UserRolesMapEntity;
import com.gts.users.repositories.PermissionRepository;
import com.gts.users.repositories.RolePermissionsMapReposiotry;
import com.gts.users.repositories.RoleRepository;
import com.gts.users.services.RolePermissionsMapService;
import com.gts.users.shared.dto.RolePermissionsMapDto;
import com.gts.users.shared.dto.UserDto;
import com.gts.users.shared.dto.UserRolesMapDto;

@Service
public class RolePermissionsMapServiceImpl implements RolePermissionsMapService {

	@Autowired
	RoleRepository roleRepo;
	
	@Autowired
	RolePermissionsMapReposiotry  rolePermissionsMapRepo;
	
	@Autowired
	PermissionRepository permissionRepo;
	
	
	@Override
	public RolePermissionsMapDto getAllMappingByRoleId(long gts_role_id, int page, int limit) {
		
	 List<RolePermissionsMapEntity> allRolePermissions = rolePermissionsMapRepo.findByRoleId(gts_role_id);

	 
	 if(allRolePermissions.size() == 0) return null;
     
	 RolePermissionsMapDto rolePermMapDto = new RolePermissionsMapDto();
      
	 
	       
	 
 	   String permissions = ""; 
     
        for(int i=0; i < allRolePermissions.size(); i++) {
   	                   
        	RolePermissionsMapEntity rPMEntity = allRolePermissions.get(i);
       	 
        	rolePermMapDto.setGts_role_id(rPMEntity.getGts_role_id());
      
            permissions +=   Long.toString(rPMEntity.getGts_permission_id());
   
            if(i == allRolePermissions.size()-1) break;
	         
            permissions += ",";
            
                  }
       
            rolePermMapDto.setPermissions(permissions);
	
        return rolePermMapDto;
	
	}
	
/*	
	@Override
	public RolePermissionsMapDto getAllMappingByRoleId(RolePermissionsMapDto  rolePermissionsMapDto, int page, int limit) {
		
	 List<RolePermissionsMapEntity> allRolePermissions = rolePermissionsMapRepo.findByRoleId(rolePermissionsMapDto.getGts_role_id());

	 
	 if(allRolePermissions.size() == 0) return null;
     
	 RolePermissionsMapDto rolePermMapDto = new RolePermissionsMapDto();
      
 	   String permissions = ""; 
     
        for(int i=0; i<allRolePermissions.size(); i++) {
   	                   
        	RolePermissionsMapEntity rPMEntity = allRolePermissions.get(i);
       	 
        	rolePermMapDto.setGts_role_id(rPMEntity.getGts_role_id());
      
          permissions +=   Long.toString(rPMEntity.getGts_permission_id());
     
                  }
       
        String[] addingcomma = permissions.split("");
            permissions = String.join("," , addingcomma);
            rolePermMapDto.setPermissions(permissions);
	
        return rolePermMapDto;
	
	}
	*/
	
	
	
	
	
	@Override
	public RolePermissionsMapDto addPermissionToRole(RolePermissionsMapDto rolePermissionsMapDto) {
		
          if(roleRepo.findRoleById1(rolePermissionsMapDto.getGts_role_id()) == null) return null;  
		
          String x = rolePermissionsMapDto.getPermissions();
	    	  String [] permissionsArray  = x.split(",");
			 
			  for(String checkPermission : permissionsArray) {
				  try {
					  if (permissionRepo.findById(Integer.parseInt(checkPermission)).get() == null)  return null; // hier i am checking if the role is avilable or not 
				  } catch(NoSuchElementException e) {
					  return null;
				  }
			  }
			  
			  try {
				  deleteMappingWithRoleId(rolePermissionsMapDto);
			} catch (Exception e) {
				return null;
			}
			
			
			  RolePermissionsMapEntity rolePermissionsMap = null;
		    	List<RolePermissionsMapEntity> addPermissions = new ArrayList<>();
		    	
		    	 for( int i=0; i<permissionsArray.length; i++) {
		    		 rolePermissionsMap = new RolePermissionsMapEntity();
		    		 rolePermissionsMap.setGts_role_id(rolePermissionsMapDto.getGts_role_id());
		    		  
		    		 rolePermissionsMap.setGts_permission_id(Long.parseLong(permissionsArray[i]));
		    	      addPermissions.add(rolePermissionsMap);
		    	   }
		    	   
		          Iterable<RolePermissionsMapEntity> ui = rolePermissionsMapRepo.saveAll(addPermissions);
		    	   Iterator itr = ui.iterator();
		    	   if(itr.hasNext()) {
		    		   return rolePermissionsMapDto;
		    	   }else
		    		   return null;
		  
		   	}

	@Override
	public RolePermissionsMapDto  deleteMappingWithRoleId(RolePermissionsMapDto rolePermissionsMapDto) {
	
		List<RolePermissionsMapEntity> op =  rolePermissionsMapRepo.findByRoleId(rolePermissionsMapDto.getGts_role_id());
		
		System.out.println(op.size());
        if(op.size() == 0) {
               return null;	          
		}else
			 rolePermissionsMapRepo.deleteMappingWithRoleId(rolePermissionsMapDto.getGts_role_id());

             rolePermissionsMapDto.setMessage("DELETED");
          return rolePermissionsMapDto;
       }
	
	
	@Override
	public RolePermissionsMapDto deleteMappingWithId(RolePermissionsMapDto rolePermissionsMapDto) {

		   Optional<RolePermissionsMapEntity> op =  rolePermissionsMapRepo.findById(rolePermissionsMapDto.getGts_role_permission_id());
			if(op.isPresent())  
			{
				rolePermissionsMapRepo.deleteById(rolePermissionsMapDto.getGts_role_permission_id());

				rolePermissionsMapDto.setMessage("DELETED");
	               return rolePermissionsMapDto;
			}else
		
      		return null;
	}

	
}
