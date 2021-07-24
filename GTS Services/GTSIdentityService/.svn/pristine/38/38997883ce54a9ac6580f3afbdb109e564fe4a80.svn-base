package com.gts.users.services;


import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.gts.users.shared.dto.RoleDto;
import com.gts.users.shared.dto.UserDto;

public interface UserService extends UserDetailsService {

	
    UserDto createUser(UserDto userDto);
    
    UserDto createUser22(UserDto userDto);
	
    UserDto getUserByid(long gts_user_id);
 
    UserDto updateUser (UserDto userDto);
    
    UserDto deleteUser(UserDto userDto);
    
    List<UserDto> getAllUsers(int page, int limit);
    
    UserDto getUserByEmail(String gts_user_email);
    
    List<UserDto> getAllRolesPermsByUserId(long gts_user_id);
    
    List<UserDto>  getAllActiveInactiveUsers(boolean gts_user_status, int page, int limit);
  
    UserDto  makeActivceInactive(UserDto userDto);
     
    UserDto deleteUserByIdPermanently(UserDto userDto);
    
    UserDto deleteUserByEmailPermanently(UserDto userDto);
}
