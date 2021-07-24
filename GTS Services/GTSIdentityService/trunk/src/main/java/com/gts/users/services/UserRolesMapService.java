package com.gts.users.services;

import com.gts.users.shared.dto.UserRolesMapDto;

public interface UserRolesMapService {
	
	UserRolesMapDto addRoleToUser(UserRolesMapDto userRolesMapDto);

	UserRolesMapDto deleteMappingWithId(UserRolesMapDto userRolesMapDto);
	
	UserRolesMapDto getAllMappingWithUserId(long gts_user_id);
	
	UserRolesMapDto deleteMappingWithUserId(UserRolesMapDto  rolePermissionsMapDto);
	
	
	UserRolesMapDto getAllPermissionsWithUserId(long gts_user_id);
}
