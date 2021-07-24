package com.gts.users.security;

import com.gts.users.SpringApplicationContext;

public class SecurityConstants {

	public static final long EXPIRATION_TIME = 864000000;   // milliseconds   = 10 days
	public static final long PASSWORD_RESET_EXPIRATION_TIME = 1000*60*60; 
	public static final String TOKEN_PREFIX = "Bearer ";
	public static final String HEADER_STRING = "Auth_Token";
//	public static final String SIGN_UP_URL = "/users";
	public static final String CREATE_USER = "/api/v1/users";
	public static final String PASSWORD_RESET_URL_1 = "/api/v1/users/password/password-reset-request";
	public static final String PASSWORD_RESET_URL_2 = "/api/v1/users/password/password-reset_2";
	
    public static String getTokenSecret() {
		AppProperties appProperties = (AppProperties) SpringApplicationContext.getBean("AppProperties");
		        return appProperties.getTokenSecret();
	}
    
    public static String getTokenSecret2() {
  		AppProperties appProperties = (AppProperties) SpringApplicationContext.getBean("AppProperties");
  		        return appProperties.getTokenSecret();
  	}

}
