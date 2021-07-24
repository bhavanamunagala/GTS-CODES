package com.gts.users.services.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.gts.users.entities.PermissionEntity;
import com.gts.users.entities.RoleEntity;
import com.gts.users.entities.RolePermissionsMapEntity;
import com.gts.users.entities.UserEntity;
import com.gts.users.entities.UserRolesMapEntity;
import com.gts.users.repositories.PermissionRepository;
import com.gts.users.repositories.RolePermissionsMapReposiotry;
import com.gts.users.repositories.RoleRepository;
import com.gts.users.repositories.UserRepository;
import com.gts.users.repositories.UserRolesMapRepository;
import com.gts.users.services.RoleService;
import com.gts.users.services.UserService;
import com.gts.users.shared.dto.PermissionDto;
import com.gts.users.shared.dto.RoleDto;
import com.gts.users.shared.dto.UserDto;

@Service
public class RoleServiceImpl implements RoleService {
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private RoleRepository roleRepo;
	
	@Autowired
	private PermissionRepository permRepo;
	
	@Autowired
	UserRolesMapRepository userRoleMapRepo;
	
	@Autowired
	RolePermissionsMapReposiotry rolePermissionsMapRepo;
	
	
	@Autowired
	UserService userService;
	
	@Override
	public List<RoleDto> getAllRolesPermsByUserId(UserDto userDto) {

		  List<RoleDto> returnValue = new ArrayList<>();
		  ModelMapper modelMapper  = new ModelMapper();
		  
		  UserEntity  userEntity  =  userRepo.findByUserId(userDto.getGts_user_id());
		  if(userEntity == null) return null;
		  
		  Collection<RoleEntity> roles1 =	userEntity.getRoles();
		  
		  if(roles1 == null) return null;
		 
		
	      roles1.forEach((role2) ->{
	    	                    returnValue.add(modelMapper.map(role2, RoleDto.class)) ;
	                     });
		return returnValue;
	}
	
	@Override
	public RoleDto createRole(RoleDto roleDto) {
	
		if(roleRepo.findByName(roleDto.getGts_role_name()) != null) return null;
		
		ModelMapper modelMapper = new ModelMapper();
		RoleEntity roleEntity = modelMapper.map(roleDto, RoleEntity.class);
		
		RoleEntity createdRole = roleRepo.save(roleEntity);
		   
		return modelMapper.map(createdRole, RoleDto.class);
	}
	

	@Override
	public RoleDto getRoleById(long gts_role_id) {
        
        RoleEntity roleEntity = roleRepo.findRoleById1(gts_role_id);
        if(roleEntity == null) return null;
        
		return new ModelMapper().map(roleEntity, RoleDto.class);
	}

	@Override
	public RoleDto updateRole( RoleDto roleDto) {
         
        RoleEntity roleEntity = roleRepo.findRoleById1(roleDto.getGts_role_id()); 
		
        if(roleEntity == null) return null;
        
        roleEntity.setGts_role_name(roleDto.getGts_role_name());
        roleEntity.setGts_role_description(roleDto.getGts_role_description());
        roleEntity.setGts_role_status(roleDto.isGts_role_status());
		
        RoleEntity updatedRole = roleRepo.save(roleEntity);
        
		return new ModelMapper().map(updatedRole, RoleDto.class);
	}
   
/*	@Override
	public RoleDto addPermissionToRole( RoleDto roleDto) {
      
		  RolePermissionsMapEntity rolePermissionsMap = null;
		  List<RolePermissionsMapEntity> allPermissions = new ArrayList<>();
		  
		  for(int i=0; i<roleDto.getPermissions().size(); i++) {
			  rolePermissionsMap = new RolePermissionsMapEntity();
			  rolePermissionsMap.setGts_role_id(roleDto.getGts_role_id());
			  
			  PermissionDto x =  roleDto.getPermissions().get(i);
			  rolePermissionsMap.setGts_permission_id(x.getGts_permission_id());
			  allPermissions.add(rolePermissionsMap);
		  }
		  rolePermissionsMapRepo.saveAll(allPermissions);
		  
		
		return roleDto;    // hier i am not doing or returning anything as not output is expected so i just retun same object.
	}
	*/
	@Override
	public RoleDto deleteRoleById(RoleDto roleDto) {
		
		RoleEntity roleEntity = roleRepo.findRoleById1(roleDto.getGts_role_id());
		
		if(roleEntity == null) return null;
		
		if(roleEntity.isGts_role_status() == false) return null;
		
		roleEntity.setGts_role_status(false);
		
		RoleEntity updatedRole = roleRepo.save(roleEntity);
		
		return  new ModelMapper().map(updatedRole, RoleDto.class);
	}

	@Override
	public List<RoleDto> getAllRoles(int page, int limit) {
    List<RoleDto> returnValue = new ArrayList<>();
    
    if(page > 0) page -=1;
    
    Pageable pageableRequest = PageRequest.of(page, limit);
    
    Page<RoleEntity> rolesPage = roleRepo.findAll(pageableRequest);
    
    if(rolesPage == null) return null;
    
    List<RoleEntity> roles = rolesPage.getContent();
    
    for(RoleEntity roleEntity :roles) {
    	returnValue.add(new ModelMapper().map(roleEntity, RoleDto.class));
    }
    
		return returnValue;
	}

	
	@Override
	public RoleDto getRoleByName(String gts_role_name) {
		
	        RoleEntity roleEntity = roleRepo.findByName(gts_role_name);
	         
	        if(roleEntity == null) return null;
	        
			return new ModelMapper().map(roleEntity, RoleDto.class);
		}

	@Override
	public RoleDto addPermissionToRole(RoleDto roleDto) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
	
	
	
}

