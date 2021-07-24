package com.gts.users.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.gts.users.repositories.UserRepository;
import com.gts.users.services.UserService;

@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
@Configuration
@EnableOAuth2Client
public class WebSecurity extends WebSecurityConfigurerAdapter{
	
	
	   private final UserService userDetailsService;
	   private final BCryptPasswordEncoder bCryptPasswordEncoder;
	   private final UserRepository userRepo;	
   
	   
	    @Autowired
		@Qualifier("oauth2authSuccessHandler")
		private AuthenticationSuccessHandler oauth2authSuccessHandler;
	   
	   public WebSecurity(UserService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder , UserRepository userRepo) {
		   this.userDetailsService = userDetailsService;
		   this.bCryptPasswordEncoder = bCryptPasswordEncoder;
		   this.userRepo = userRepo;
	}



	@Override
	    protected void configure(HttpSecurity http) throws Exception {
		System.out.println("----");
	             http.cors().and()
	                 .csrf().disable().authorizeRequests()
	               //  .antMatchers("/api/v1/users/login").permitAll()
	                 .antMatchers("/login").permitAll()
	                 .antMatchers("/api/v1/user/email").permitAll()
	                 .antMatchers("/api/v1/user").permitAll()
	           //      .antMatchers(HttpMethod.POST,SecurityConstants.SIGN_UP_URL).permitAll()
	                 .antMatchers(HttpMethod.POST, SecurityConstants.CREATE_USER).permitAll()
	                 .antMatchers(HttpMethod.POST, SecurityConstants.PASSWORD_RESET_URL_1).permitAll()
	                 .antMatchers(HttpMethod.POST, SecurityConstants.PASSWORD_RESET_URL_2).permitAll()
	                 .antMatchers("/v2/api-docs","/linkedin/*", "/configuration/**", "/swagger*/**", "/webjars/**").permitAll()
          //           .antMatchers("/users/job_seeker").hasAuthority("CAN_VIEW_JOB_SEEKER_PROFILE")
	                 .anyRequest().authenticated()
	                 .and()
	                 .addFilter(getAuthenticationFilter())
	                 .addFilter(new AuthorizationFilter(authenticationManager(), userRepo))
	                 .sessionManagement()
	                 .sessionCreationPolicy(SessionCreationPolicy.STATELESS)// if required then we can change the
	                                                                     // policy from STATELESS to any other also
	                 .and().oauth2Login().loginPage("/login").successHandler(oauth2authSuccessHandler);
	             
	           //  	http.cors();

	              }
	   
	   
        @Override
        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
           auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
        }
        
        public AuthenticationFilter getAuthenticationFilter() throws Exception {
			final AuthenticationFilter filter = new AuthenticationFilter(authenticationManager(),userRepo);
			filter.setFilterProcessesUrl("/api/v1/users/login");
			return filter;
		}

       @Bean
        public CorsConfigurationSource  corsConfigurationSource() {
        	
        	final CorsConfiguration   configuration = new CorsConfiguration();
        	
        	configuration.setAllowedOrigins(Arrays.asList("*"));  // use  ("*")  if we want to allow calls from all the origins
        	configuration.setAllowedMethods(Arrays.asList("*"));  // use  ("*") to allow all methods calls e.g GET,POST,PUT,DELETE
        	configuration.setAllowCredentials(true);        // if we want to allow credentials to be included in the Http Response
        	                                                // Credentials means  cookies, Authorization Headers or SSL client certificates 
        	
        	configuration.setAllowedHeaders(Arrays.asList("*")); // as we have  Auth_Token  as Header so we can specifie with specific name
          	                                                     // or ("*")  use this to allow all
        	
        	final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        	source.registerCorsConfiguration("/**", configuration);   // this is for the specific path like we have
        	                                                          //   /api/v1/users/login      this for the login
        	return source;                                              // so we can put his specific path or we can use  "*"  to allow all
        	
        }
}
