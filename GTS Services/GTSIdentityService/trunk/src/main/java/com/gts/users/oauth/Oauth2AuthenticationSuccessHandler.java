package com.gts.users.oauth;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.gts.users.entities.UserEntity;
import com.gts.users.repositories.UserRepository;

@Component("oauth2authSuccessHandler")
public class Oauth2AuthenticationSuccessHandler  implements AuthenticationSuccessHandler{

	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();;
	
    @Autowired
	private OAuth2AuthorizedClientService authorizedClientService;

	@Autowired
	private UserRepository userRepository;


	
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {

		OAuth2AuthenticationToken oToken = (OAuth2AuthenticationToken) authentication;
		if (userRepository.findByEmail(authentication.getName()) == null) {

			System.out.println("- CREDENTIALS - " + authentication.getCredentials());
			System.out.println("- DETAILS     - "  + authentication.getDetails());
			System.out.println("- NAME        - "  + authentication.getName());
			System.out.println("- Principal   - "  + authentication.getPrincipal());
			System.out.println("- Authorities - "  + authentication.getAuthorities());
			System.out.println("- CLASS       - "  +authentication.getClass());
			System.out.println("getAttributes: "+oToken.getPrincipal().getAttributes());
			
			String email=oToken.getPrincipal().getAttributes().get("email").toString();
			
			
			 
			UserEntity user = new UserEntity(email);
			
			System.out.println(6);
			
			userRepository.save(user);
			
			System.out.println(7);
		}

		this.redirectStrategy.sendRedirect(request, response,"/hello");

	}
	
}
