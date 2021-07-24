package com.gts.users.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.gts.users.entities.PermissionEntity;
import com.gts.users.repositories.PermissionRepository;
import com.gts.users.services.PermissionService;
import com.gts.users.services.UserRolesMapService;
import com.gts.users.shared.dto.PermissionDto;
import com.gts.users.shared.dto.UserRolesMapDto;

@Service
public class PermissionServiceImpl implements PermissionService {

	@Autowired
	PermissionRepository permRepo;
	
	@Autowired
	UserRolesMapService userRolesMapService;

	@Override
	public PermissionDto createPermission(PermissionDto permissionDto) {
        if(permRepo.findByName(permissionDto.getGts_permission_name()) != null) return null;
		
		ModelMapper modelMapper = new ModelMapper();
		PermissionEntity perEntity = modelMapper.map(permissionDto, PermissionEntity.class);
		
		PermissionEntity createdPermission = permRepo.save(perEntity);
		   
		return modelMapper.map(createdPermission, PermissionDto.class);
	}

	@Override
	public PermissionDto getPermissionById(int gts_permission_id) {
	        
	        PermissionEntity permEntity = permRepo.findByPermissionId(gts_permission_id);
	         
	        if(permEntity == null) return null;
	        
			return new ModelMapper().map(permEntity, PermissionDto.class);
		}
	

	@Override
	public PermissionDto updatePermission(PermissionDto permissionDto) {

		PermissionEntity permEntity = permRepo.findByPermissionId(permissionDto.getGts_permission_id());
		
        if(permEntity == null) return null;
        
        permEntity.setGts_permission_name(permissionDto.getGts_permission_name());
        permEntity.setGts_permission_description(permissionDto.getGts_permission_description());
        permEntity.setGts_permission_status(permissionDto.isGts_permission_status());
		
        PermissionEntity updatedPermission = permRepo.save(permEntity);
        
		return new ModelMapper().map(updatedPermission, PermissionDto.class);
	}

	@Override
	public PermissionDto deletePermission(PermissionDto permissionDto) {
		
		PermissionEntity permEntity = permRepo.findByPermissionId(permissionDto.getGts_permission_id());
		
		if(permEntity == null) return null;
		
		if(permEntity.isGts_permission_status() == false) return null;
		
		permEntity.setGts_permission_status(false);
		
		PermissionEntity updatedPermission = permRepo.save(permEntity);
		
		return  new ModelMapper().map(updatedPermission, PermissionDto.class);
	}

	@Override
	public List<PermissionDto> getAllPermissions(int page, int limit) {
		 List<PermissionDto> returnValue = new ArrayList<>();
		    
		    if(page > 0) page -=1;
		    
		    Pageable pageableRequest = PageRequest.of(page, limit);
		    
		    Page<PermissionEntity> rolesPage = permRepo.findAll(pageableRequest);
		    
		    if(rolesPage == null) return null;
		    
		    List<PermissionEntity> permissions = rolesPage.getContent();
		    
		    for(PermissionEntity permEntity : permissions) {
		    	returnValue.add(new ModelMapper().map(permEntity, PermissionDto.class));
		    }
		    
				return returnValue;
			}

	
	
	@Override
	public PermissionDto getPermissionByName(String gts_permission_name) {
        
		PermissionEntity permEntity = permRepo.findByName(gts_permission_name);
         
        if(permEntity == null) return null;
        
		return new ModelMapper().map(permEntity, PermissionDto.class);
	}

	
}
