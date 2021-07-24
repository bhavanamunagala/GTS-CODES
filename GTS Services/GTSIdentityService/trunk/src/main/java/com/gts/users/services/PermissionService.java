package com.gts.users.services;

import java.util.List;

import com.gts.users.shared.dto.PermissionDto;
import com.gts.users.shared.dto.UserRolesMapDto;

public interface PermissionService {

	PermissionDto createPermission(PermissionDto permissonDto);
	PermissionDto getPermissionById(int gts_permission_id);
	PermissionDto updatePermission(PermissionDto permissonDto);
	PermissionDto deletePermission(PermissionDto permissonDto);
	List<PermissionDto> getAllPermissions(int page, int limit);
	PermissionDto getPermissionByName(String gts_permission_name);
	
}
