package com.gts.users.services;

import java.util.List;

import com.gts.users.shared.dto.RoleDto;
import com.gts.users.shared.dto.UserDto;

public interface RoleService {

    List<RoleDto> getAllRolesPermsByUserId(UserDto userDto);
	
    
    RoleDto createRole(RoleDto roleDto);
	RoleDto getRoleById(long gts_role_id);
	RoleDto updateRole(RoleDto roleDto);
	RoleDto deleteRoleById(RoleDto roleDto);
	List<RoleDto> getAllRoles(int page, int limit);
	RoleDto getRoleByName(String gts_role_name);
	
	RoleDto addPermissionToRole(RoleDto roleDto);
}
