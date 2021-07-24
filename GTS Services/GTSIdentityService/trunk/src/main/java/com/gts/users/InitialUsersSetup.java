package com.gts.users;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import com.gts.users.entities.PermissionEntity;
import com.gts.users.entities.RoleEntity;
import com.gts.users.entities.UserEntity;
import com.gts.users.repositories.PermissionRepository;
import com.gts.users.repositories.RoleRepository;
import com.gts.users.repositories.UserRepository;

@Component
public class InitialUsersSetup {

	WebClient webClient;
	
	@Autowired
	PermissionRepository permissionRepo;
	
	@Autowired
	RoleRepository roleRepo;
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	BCryptPasswordEncoder bcrypt;

    @EventListener	
    @Transactional
    public void onApplicationEvent(ApplicationReadyEvent event) {
    	System.out.println("from application event..");
    	
    	


    	
    /*		webClient = WebClient.builder()
    				             .baseUrl("https://localhost:4711/api/v1")
    				             .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
    				             .build();
    	
    	*/
    	
/*    	
   	PermissionEntity search_job = createPermission("CAN_SEARCH_JOB");
    	PermissionEntity apply_job = createPermission("CAN_APPLY_FOR_JOB");
    	PermissionEntity training = createPermission("CAN_APPLY_FOR_TRAINING");
    	PermissionEntity online_test = createPermission("CAN_WRITE_ONLINE_TEST");
    	PermissionEntity post_job = createPermission("CAN_POST_JOB");
    	PermissionEntity acquire_candidate = createPermission("CAN_PROPOSE_TO_ACQUIRE_CANDIDATE");
    	PermissionEntity view_prof = createPermission("CAN_VIEW_JOB_SEEKER_PROFILE");
 
    	PermissionEntity create_account = createPermission("CAN_CREATE_ACCOUNT");
    	PermissionEntity update_account = createPermission("CAN_UPDATE_ACCCOUNT");
    	PermissionEntity can_get_one_user = createPermission("CAN_GET_USER_BY_ID");
    	PermissionEntity get_all_users = createPermission("CAN_GET_LIST_OF_USERS");
    	PermissionEntity can_delete_account = createPermission("CAN_DELETE_ACCOUNT");
    	
    	RoleEntity roleUser  = createRole("ROLE_USER",true, Arrays.asList(create_account , update_account));
    	RoleEntity roleAdmin = createRole("ROLE_ADMIN",true, Arrays.asList(create_account, update_account,
    	                                              	    	  can_get_one_user,  get_all_users,can_delete_account));
    	
 	
    	
    	if(roleAdmin == null) return;
     */  	

    	
/*    	UserEntity user2 = new UserEntity();
    	user2.setGts_user_id(1l);
    	user2.setGts_user_email("admin@gmail.com");
    	user2.setGts_user_password(bcrypt.encode("1234"));
    	user2.setGts_user_status(true);
    	user2.setGts_user_login_tries(1);
   // 	user2.setRoles(Arrays.asList(roleAdmin));
    	
    	userRepo.save(user2);
  */  	

//	}
    
 /*   @Transactional
    private PermissionEntity createPermission(String name) {
           
    	PermissionEntity permission = permissionRepo.findByName(name);
    	
    	if ( permission == null) {
    		permission = new PermissionEntity(name);
    	    permission = permissionRepo.save(permission);
    	}
    	return permission;
             }
    
    @Transactional
    private RoleEntity  createRole(String name,boolean status, List<PermissionEntity> permissions) {
    	
    	  RoleEntity role = roleRepo.findByName(name);
    	  if(role == null) {
    		  role = new RoleEntity(name, status);
    		  role.setPermissions(permissions);
    		  roleRepo.save(role);
    	  }
    	
    	
    	return role;
  */
    }
    
    
    } 
    
    
