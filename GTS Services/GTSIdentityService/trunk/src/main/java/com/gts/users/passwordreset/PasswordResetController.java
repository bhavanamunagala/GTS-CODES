package com.gts.users.passwordreset;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gts.users.model.request.PasswordResetModel;
import com.gts.users.model.request.PasswordResetRequestModel;
import com.gts.users.model.response.OperationsStatusModel;
import com.gts.users.model.response.RequestOperationStatus;

@RestController
@RequestMapping("/api/v1/users/password")
public class PasswordResetController {

	@Autowired
	PasswordResetService  passwordResetService;

	
	//https://localhost:4711/api/v1/users/password-reset-request
	@PostMapping(path= "/password-reset-request")
	public OperationsStatusModel requestReset(@RequestBody PasswordResetRequestModel passwordResetRequestModel) {
		
		OperationsStatusModel returnValue = new OperationsStatusModel();
		
		
		PasswordResetDto  passwordResetDto =  new ModelMapper().map(passwordResetRequestModel, PasswordResetDto.class);
		
		boolean operationResult = passwordResetService.requestPasswordReset(passwordResetDto);
		
		
		returnValue.setOperationName("REQUEST_PASSWORD_RESET");
		returnValue.setOperationResult(RequestOperationStatus.ERROR.name());
		
		if(operationResult) {
			returnValue.setOperationResult(RequestOperationStatus.SUCCESS.name());
		}
		
		return returnValue;
	}
	
	//https://localhost:4711/api/v1/users/password-reset
	@PostMapping(path ="/password-reset_2")
	public OperationsStatusModel resetPassword(@RequestBody PasswordResetModel passwordResetModel) {
		OperationsStatusModel returnValue = new OperationsStatusModel();
		
		PasswordResetDto  passwordResetDto =  new ModelMapper().map(passwordResetModel, PasswordResetDto.class);
		
		boolean operationResult = passwordResetService.resetPassword(passwordResetDto);
		
		returnValue.setOperationName("Password Reset");
	    returnValue.setOperationResult("Error");	
		
	    if(operationResult) {
	    	returnValue.setOperationResult("SUCCESS");
	    }
		return returnValue;
		
	}
	@PutMapping
	public OperationsStatusModel updatePassword(@RequestBody PasswordUpdateModel passwordupdateModel) {
	    OperationsStatusModel returnValue = new OperationsStatusModel();

	    PasswordResetDto  passwordResetDto =  new ModelMapper().map(passwordupdateModel, PasswordResetDto.class);
	    
	    boolean updated = passwordResetService.updatePassword(passwordResetDto);
	    
	    returnValue.setOperationName("Password Reset");
	    returnValue.setOperationResult("Error");
	    
	    if(updated) {
	    	returnValue.setOperationResult("SUCCESS");
	    }
	    
	    return returnValue;
	}
	
}
