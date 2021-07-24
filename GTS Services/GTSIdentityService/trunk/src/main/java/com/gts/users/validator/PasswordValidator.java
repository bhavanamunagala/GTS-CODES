package com.gts.users.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.stereotype.Component;

@Component
public class PasswordValidator{
	
	private static final String PASSWORD_PATTERN = "^[a-zA-Z@#$%^&+=](?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}[a-zA-Z0-9]$";
    private Pattern pattern;
    private Matcher matcher;


   public boolean isValid(final String password) {
	   
	   if(password.contains(" ")) return false;
       
	   return (validateEmail(password));
   }

   private boolean validateEmail(final String password) {
       pattern = Pattern.compile(PASSWORD_PATTERN);
       matcher = pattern.matcher(password);
         return matcher.matches();
     }
 } 

