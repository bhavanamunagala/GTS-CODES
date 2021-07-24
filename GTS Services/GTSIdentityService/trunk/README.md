Table of Content

• Bsic Overview


- Authorities - [ROLE_USER, SCOPE_https://www.googleapis.com/auth/userinfo.email, 
                      SCOPE_https://www.googleapis.com/auth/userinfo.profile, SCOPE_openid]
- CLASS       - class org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken

======================================================================

• To retrive all the Roles and Permissions of a specific user 
• GET:   https://localhost:4711/users/getRolesById/1

  Resonse
  --------

[
    {
        "gts_role_id": 1,
        "gts_role_name": "ROLE_USER",
        "permissions": [
            {
                "gts_permission_id": 1,
                "gts_permission_name": "CAN_CREATE_ACCOUNT",
                "gts_permission_status": false,
                "gts_permission_description": null
            },
            {
                "gts_permission_id": 2,
                "gts_permission_name": "CAN_UPDATE_ACCCOUNT",
                "gts_permission_status": false,
                "gts_permission_description": null
            }
        ]
    }
]






=======
• Why should i use it

• Deployment

• Automated Deployment

• Installation

• Usage

• Security Perspective

Basic Overview
• Hier is the Trainer module, we uses Spring framework, Spring Boot, Spring Security, Mysql, Hibernate ,JPA and Postman.

What should i use
• JDK 1.8

• Spring Tool Suit 4

• MySQL 8.0 https://www.youtube.com/watch?v=GIRcpjg-3Eg

• Postman 7

Install MySQL and create tables
 {
create table gts_users(
                      gts_user_id bigint NOT NULL AUTO_INCREMENT,
                      gts_user_email varchar(256) NOT NULL, 
                      gts_user_password varchar(256) NOT NULL, 
                      gts_user_first_name varchar(256) , 
                      gts_user_last_name varchar(256) ,
                      gts_user_mobile varchar(256) , 
                      gts_user_status varchar(256) , 
                      gts_user_login_tries int, 
                      gts_is_mobile_validated varchar(256), 
                      PRIMARY KEY(gts_user_id),
                      UNIQUE (gts_user_id) );

 }
create table gts_roles( gts_role_id bigint NOT NULL AUTO_INCREMENT, gts_role_name varchar(255) NOT NULL, gts_role_status bit, gts_role_description varchar(255), PRIMARY KEY (gts_role_id) );

create table gts_users_roles_map( gts_user_role_map_id bigint NOT NULL AUTO_INCREMENT, gts_user_id bigint , gts_role_id bigint , PRIMARY KEY (gts_user_role_map_id), FOREIGN KEY(gts_user_id) REFERENCES gts_users(gts_user_id), FOREIGN KEY(gts_role_id) REFERENCES gts_roles(gts_role_id) );

create table gts_permission( gts_permission_id bigint NOT NULL AUTO_INCREMENT, gts_permission_name varchar(255) NOT NULL, gts_permission_status bit, gts_permission_description varchar(255), PRIMARY KEY (gts_permission_id) );

• id should be unique • email should be unique

Pull the Project from Github and run it

Go to Github https://github.com/kabitagorai2210/GTSProfileService and pull the project in the Spring Tool Suit.

In spring Tool Suit right click on the project name -> Maven -> Update project Then manven will fetch the requeired Jars from the centeral repository.

In the Project open application.properties -> change the credentials for database

Go to project name right click -> Run as -> Spring boot app

At this time MySQL should also be running so that we can insert data into Table through Psotman calls Postman calls

• Login through predefined users with ADMIN, USER roles • This application will create automatically 2 users and define one as ROLE_USER and one as ROLE_ADMIN • After successfull login we will get a Authorization Token, after that for any call we want to make we have to put that Authorization Token in the Header of Postman request then only that request will be executed.

Note: as this is predefined user with ROLE_ADMIN so i have give all the permission to it and it can call all the methods choose : PUT localhost:9999/users/login Request Login with ROLE_ADMIN
 {
  "gts_user_email" : "admin@gmail.com",
  "gts_user_password" : "1234"
 }
Response { 
