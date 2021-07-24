package com.gts.users.controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Collections;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gts.users.model.request.LinkedinRequestModel;
import com.gts.users.model.response.JsonResponseModel;
import com.gts.users.repositories.ResponseMessageConstants;

@RestController
@RequestMapping("linkedin")
@CrossOrigin(origins = "*")
public class LinkedinController {
	

	private static final Logger LOGGER = LoggerFactory.getLogger(LinkedinController.class);

	@PostMapping(path = "login", produces = { MediaType.APPLICATION_JSON_VALUE })
	public JsonResponseModel getAccessToken(@RequestBody LinkedinRequestModel linkedinDetails) throws IOException{
		
		JsonResponseModel returnValue = new JsonResponseModel();
		
		String url2 = "https://www.linkedin.com/uas/oauth2/accessToken";
		String client_id = "78ycb7cmg4873f";
		String client_secret = "RwzI2p2Fg4BCd0W5";
		String grant_type = "authorization_code";
		String redirect_uri = "http://localhost:3001/LinkedinLogin";


		String urlParamater1 =  url2 +"?client_id=" + client_id + "&client_secret=" + client_secret + "&grant_type="
			                           	+ grant_type + "&redirect_uri=" + redirect_uri + "&code=";
		  
		LOGGER.info("Inside the UserController  getAccessToken() method"+ urlParamater1); 
		
	    final String POST_PARAMS = "{\n" + 
	    		//"	\"userId\": 101,\r\n" +
	            //"    \"id\": 101,\r\n" +
	            //"    \"title\": \"Test Title\",\r\n" +
	            "    \"body\": \"Request Body\"" + "\n}";
	    
	    
	        urlParamater1=urlParamater1+linkedinDetails.getCode();
	        
	        //System.out.println("urlParamater1: "+urlParamater1);
	        
	        URL obj = new URL(urlParamater1);
	        HttpURLConnection postConnection = (HttpURLConnection) obj.openConnection();
	        postConnection.setRequestMethod("POST");
	        postConnection.setRequestProperty("Content-Type", "application/json");
	        
	        //System.out.println("111");
	        
	        postConnection.setDoOutput(true);
	        OutputStream os = postConnection.getOutputStream();
	        os.write(POST_PARAMS.getBytes());
	        os.flush();
	        os.close();
	        
	        //System.out.println("222");
	        
	        int responseCode = postConnection.getResponseCode();
	        
	        //System.out.println("responseCode: "+responseCode);
	        
	        BufferedReader in = new BufferedReader(new InputStreamReader(postConnection.getInputStream()));
	        
            String inputLine;
            StringBuffer response = new StringBuffer();
            
            //System.out.println("in: "+in);
            
            while ((inputLine = in .readLine()) != null) {
                response.append(inputLine);
            } in .close();

            System.out.println(response.toString());
            //System.out.println(response.substring(2, response.length()));
            
            String accessToken=response.substring(17, response.length()-23);
            
            System.out.println("accessToken: "+accessToken);
            
            String authToken= getLinkedinToken(accessToken);
            
            System.out.println("authToken: "+authToken);
            
	       if(authToken == null) {
			    returnValue.setSuccess(ResponseMessageConstants.getSuccessFalse());
			    returnValue.setMessage(ResponseMessageConstants.getAccountCreatedFailure());
			    returnValue.setStatus_code(ResponseMessageConstants.getResponse500());
	       }else {
			   returnValue.setSuccess(ResponseMessageConstants.getSuccessTrue());
			   returnValue.setMessage(authToken);
			   returnValue.setStatus_code(ResponseMessageConstants.getResponse200()); 
	       }
		       
	       System.out.println("==================================================");
		return returnValue;
	}
	
	private String getLinkedinToken(String accessToken) throws IOException{
		
		URL urlForGetRequest = new URL("https://api.linkedin.com/v2/me");
	    String readLine = null;
	    HttpURLConnection conection = (HttpURLConnection) urlForGetRequest.openConnection();
	    conection.setRequestMethod("GET");
	    //conection.setRequestProperty("userId", "a1bcdef"); // set userId its a sample here
	    
	    
	    //HttpHeaders headers = new HttpHeaders();
	    //headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
	    //headers.add("Authorization", "Bearer "+accessToken );
	    
	    conection.setRequestProperty ("Authorization", "Bearer "+accessToken);
	    
	    int responseCode = conection.getResponseCode();
	    System.out.println("responseCode: "+responseCode);
	    
	    StringBuffer response = new StringBuffer();
	    
	    if (responseCode == HttpURLConnection.HTTP_OK) {
	        BufferedReader in = new BufferedReader(
	            new InputStreamReader(conection.getInputStream()));
	        
	        while ((readLine = in .readLine()) != null) {
	            response.append(readLine);
	        } 
	        in .close();
	    } else {
	        System.out.println("GET NOT WORKED");
	    }

		
		
		
		return response.toString();
	}
	
	
	
	
	
}