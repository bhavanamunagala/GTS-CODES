package com.gts.users;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.freemarker.FreeMarkerConfigurationFactoryBean;

import com.gts.users.security.AppProperties;



@SpringBootApplication                                              
public class GTSUserProfileServiceStart {                      

	public static void main(String[] args) {
		SpringApplication.run(GTSUserProfileServiceStart.class, args);
	}

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public SpringApplicationContext springApplicationContext()
	{
		return new SpringApplicationContext();
	}

    @Bean("AppProperties")
    public AppProperties getAppProperties() 
    {
    	return new AppProperties();
    }
    
    @Primary
	@Bean 
	public FreeMarkerConfigurationFactoryBean factoryBean() {
		FreeMarkerConfigurationFactoryBean bean=new FreeMarkerConfigurationFactoryBean();
		bean.setTemplateLoaderPath("classpath:/templates");
		return bean;
	}

}
