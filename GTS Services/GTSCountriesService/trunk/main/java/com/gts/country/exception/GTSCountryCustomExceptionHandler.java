package com.gts.country.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.gts.country.util.MethodUtils;

@ControllerAdvice
public class GTSCountryCustomExceptionHandler {
	
	@ExceptionHandler(value=ApplicationException.class)
	public ResponseEntity<String> applicationException(ApplicationException exception){
		HttpStatus status=HttpStatus.BAD_REQUEST;
		return new ResponseEntity<>(MethodUtils.prepareErrorJSON(status,exception),status);
	}
	
	@ExceptionHandler(value=GTSCountryNotFoundException.class)
	public ResponseEntity<String> gTSCountriesNotFoundException(GTSCountryNotFoundException exception){
		HttpStatus status=HttpStatus.NOT_FOUND;
		return new ResponseEntity<>(MethodUtils.prepareErrorJSON(status,exception),status);
	}
	
	
}
