package com.gts.users.passwordreset;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

@Component
public class JavaEmailService1 {

	@Autowired
	private  JavaMailSender sender;
	
	@Autowired
	private Configuration config;
	
	final String PASSWORD_RESET_SUBJECT = "Password reset request";
		  
		  public  boolean sendPasswordResetRequest(String firstName, String email, String token)
		  {
		
			  String uri = "PUT_ANY_PAGE?token=";
	             token = uri+token;
	             Map<String, Object> model = new HashMap<>();
	             model.put("token2", token);
	             
		      boolean returnValue = false;
		      
		      MimeMessage message = sender.createMimeMessage();
		         	
		    		try {
		    			MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
		    		                                                                          			StandardCharsets.UTF_8.name());
		    		
		    			helper.addAttachment("logo.jpg", new ClassPathResource("logo.jpg"));
		    			Template template = config.getTemplate("email-template.ftl");
		    			String html_Page = FreeMarkerTemplateUtils.processTemplateIntoString(template, model);
		    			
		    			helper.setTo(email);
		    			helper.setSubject(PASSWORD_RESET_SUBJECT);
		    			helper.setText(html_Page, true);
   //		    		helper.setText(textBodyWithToken);
		    	//		helper.setFrom(firstName);
		    			sender.send(message);
 
		    			 returnValue = true;

		    		} catch (MessagingException |IOException| TemplateException   e) {

                         
                         returnValue = false;
		    		}

		    		return returnValue;
		    	}
		         	
		         	
}   	
		         	