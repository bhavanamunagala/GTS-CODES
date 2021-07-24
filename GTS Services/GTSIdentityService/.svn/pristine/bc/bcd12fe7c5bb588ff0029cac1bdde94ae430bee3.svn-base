Table of Contents

• Bsic Overview

<<<<<<< HEAD
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
Response { "status_code": "200" }

Note: as this is predefined user with ROLE_USER so i have give all the permission to it and it can call all the methods this user can call only getUser with ID and update user methods. choose : PUT localhost:9999/users/login Request Login with ROLE_User { "gts_user_email" : "user@gmail.com", "gts_user_password" : "1234" }

Response { "status_code": "200" }

Request with ROLE_USER

Request
choose : POST localhost:9999/users

 {
   "gts_user_email" : "10@gmail.com",
   "gts_user_password" : "44",
   "gts_user_first_name" : "bunny",
   "gts_user_last_name" :"sss",
   "gts_user_mobile" : "123456",
   "gts_user_status" : "true",
   "gts_user_login_tries" :"0",
   "gts_is_mobile_validated" : "true"
}

Response
 {
   "success": "true",
   "message": "Account created Successfully",
   "status_code": "200"
} OR

 {
   "success": "false",
   "message": "Account does not created",
   "status_code": "500"
}

• Update User through Postman
• while updating id, email must be same we can not update them only name and password can be updated
choose : PUT localhost:9999/users/1 Request
{

   "gts_user_password" : "44",
   "gts_user_first_name" : "bunny",
   "gts_user_last_name" :"sss",
   "gts_user_mobile" : "123456",
   "gts_user_status" : "true",
   "gts_user_login_tries" :"0",
   "gts_is_mobile_validated" : "true"
}

Response
  {
    "success": "true",
    "message": "Account updated successfully",
    "status_code": "200"
  }
                       
   OR
   
  {
    "success": "false",
    "message": "Account Nr does not found",
    "status_code": "500"
}

• Retrive single user by Id through Postman
• choose : GET localhost:9999/users/1

Response
   {
    "gts_user_id": 1,
    "gts_user_email": "aaa@gmail.com",
    "gts_user_password": "$2a$10$Bu61K80JKo1oS3QghCF0nOwCG9kDkeIrQ.HbK.K16H/IgjDOd5vEq",
    "gts_user_first_name": "aaa",
    "gts_user_last_name": "AAA",
    "gts_user_mobile": "123456",
    "gts_user_status": true,
    "gts_user_login_tries": 1,
    "gts_is_mobile_validated": true
  }
  
  OR
  
  {
   "success": "false",
   "message": "Not found user with this User ID",
   "status_code": "500"
}

• Retrive all users through Postman
• At present i gave only authority for ROLE_ADMIN to retrive all the Users List, so must login with Admin account ) • choose : GET localhost:9999/users

Response
[
{
    "gts_user_id": 2,
    "gts_user_email": "admin@gmail.com",
    "gts_user_password": "$2a$10$j7SHcievYopzIjn0J8OwPu8G59wTRWwCUl6mVwS3HSbRF0wH3wpzS",
    "gts_user_first_name": "bbb",
    "gts_user_last_name": "BBB",
    "gts_user_mobile": "123456",
    "gts_user_status": true,
    "gts_user_login_tries": 0,
    "gts_is_mobile_validated": true
},
{
    "gts_user_id": 1,
    "gts_user_email": "user@gmail.com",
    "gts_user_password": "$2a$10$908futjv/QqDEeUCk5dx1e0mUI47blQHSFwg7.OEiHzHYVH9uZA7a",
    "gts_user_first_name": "aaa",
    "gts_user_last_name": "AAA",
    "gts_user_mobile": "123456",
    "gts_user_status": true,
    "gts_user_login_tries": 1,
    "gts_is_mobile_validated": true
}
]

OR

 {
   "success": "false",
   "message": "Not found user with this User ID",
   "status_code": "500"
}

• Delete single user by Id through Postman
• choose : DELETE localhost:9999/users/1

Response
{
  "success": "true",
  "message": "User successfully deleted",
  "status_code": "200"
}
OR

{
  "success": "false",
  "message": "User can not be deleted",
  "status_code": "500"
 }
 
• Retriving Roles and Permissions using user_id
• https://localhost:4711/users/getRolesById/1

Response
  
  
  status: 200 OK

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

OR

{
    "success": "false",
    "message": "No role is defined to this user",
    "status_code": "500"
}
----------------------------------------------------------------------

Create a new Permission
POST: https://localhost:4711/permissions
{
   "gts_permission_name" : "CAN_SEARCH_JOB" ,
   "gts_permission_status" : "true",
   "gts_permission_description" : "searching job description"
}
{
   "gts_permission_name" : "CAN_APPLY_FOR_JOB" ,
   "gts_permission_status" : "true",
   "gts_permission_description" : "apply job description"
}
{
   "gts_permission_name" : "CAN_APPLY_FOR_TRAINING" ,
   "gts_permission_status" : "true",
   "gts_permission_description" : "apply for trainer description"
}
{
   "gts_permission_name" : "CAN_WRITE_ONLINE_TEST" ,
   "gts_permission_status" : "true",
   "gts_permission_description" : "writing online test description"
}
{
   "gts_permission_name" : "CAN_POST_JOB" ,
   "gts_permission_status" : "true",
   "gts_permission_description" : "posting job description"
}
{
   "gts_permission_name" : "CAN_PROPOSE_TO_ACQUIRE_CANDIDATE" ,
   "gts_permission_status" : "true",
   "gts_permission_description" : "aquiring candidate description"
}
{
   "gts_permission_name" : "CAN_VIEW_JOB_SEEKER_PROFILE" ,
   "gts_permission_status" : "true",
   "gts_permission_description" : "view profile description"
}
------------------------------------------------------------------
Update a Permission with permission id
PUT https://localhost:4711/permissions/1

{
   "gts_permission_name" : "CAN_SEARCH_JOB" ,
   "gts_permission_status" : "true",
   "gts_permission_description" : "searching job description22"
}
------------------------------------------------------------

Delete a Permission with Permission id
DELETE  https://localhost:4711/permissions/2

{
    "success": "true",
    "message": "permission deleted sucessfully",
    "status_code": "200"
}

------------------------------------------------------------------

Get all Permissions
GET https://localhost:4711/permissions


[
    {
        "gts_permission_name": "CAN_SEARCH_JOB",
        "gts_permission_description": "searching job description22",
        "gts_permission_status": true
    },
    {
        "gts_permission_name": "CAN_APPLY_FOR_JOB",
        "gts_permission_description": "apply job description",
        "gts_permission_status": false
    },
    {
        "gts_permission_name": "CAN_APPLY_FOR_TRAINING",
        "gts_permission_description": "apply for trainer description",
        "gts_permission_status": true
    },
    {
        "gts_permission_name": "CAN_WRITE_ONLINE_TEST",
        "gts_permission_description": "writing online test description",
        "gts_permission_status": true
    },
    {
        "gts_permission_name": "CAN_POST_JOB",
        "gts_permission_description": "posting job description",
        "gts_permission_status": true
    },
    {
        "gts_permission_name": "CAN_PROPOSE_TO_ACQUIRE_CANDIDATE",
        "gts_permission_description": "aquiring candidate description",
        "gts_permission_status": true
    },
    {
        "gts_permission_name": "CAN_VIEW_JOB_SEEKER_PROFILE",
        "gts_permission_description": "view profile description",
        "gts_permission_status": true
    }
]










---------------------------------------------------------------------
create new Role
POST: https://localhost:4711/roles

{
    "gts_role_name" : "GTS_JOB_SEEKER",
    "gts_role_status" : "true",
    "gts_role_description" : "job Sekker Description"
}

{
    "gts_role_name" : "GTS_EMPLOYER",
    "gts_role_status" : "true",
    "gts_role_description" : "employeer description"
}

{
    "gts_role_name" : "GTS_RECRUITER",
    "gts_role_status" : "true",
    "gts_role_description" : "recruiter description"
}

{
    "gts_role_name" : "GTS_TRAINER",
    "gts_role_status" : "true",
    "gts_role_description" : "trainer description"
}

----------------------------------------------------------------
Add perdefined permissions to a perdefined Role 
PUT https://localhost:4711/roles/addPermission

{
    "gts_role_id" : "1",
    "gts_role_name" : "GTS_JOB_SEEKER",
    "permissions" : [
      {
      "gts_permission_id" :"1"
      },
      {
      "gts_permission_id" :"2"
      },
      {
      "gts_permission_id" :"4"
      }
    ]
}
----------------------------------------------------------------
Get all Roles with defined permissions to every Role
GET   https://localhost:4711/roles

[
    {
        "gts_role_id": 1,
        "gts_role_name": "GTS_JOB_SEEKER",
        "gts_role_description": "job Sekker Description11",
        "gts_role_status": true,
        "permissions": [
            {
                "gts_permission_name": "CAN_SEARCH_JOB",
                "gts_permission_description": "searching job description",
                "gts_permission_status": true
            },
            {
                "gts_permission_name": "CAN_APPLY_FOR_JOB",
                "gts_permission_description": "apply job description",
                "gts_permission_status": true
            },
            {
                "gts_permission_name": "CAN_WRITE_ONLINE_TEST",
                "gts_permission_description": "writing online test description",
                "gts_permission_status": true
            }
        ]
    },
    {
        "gts_role_id": 2,
        "gts_role_name": "GTS_EMPLOYER",
        "gts_role_description": "employeer description",
        "gts_role_status": false,
        "permissions": []
    },
    {
        "gts_role_id": 3,
        "gts_role_name": "GTS_RECRUITER",
        "gts_role_description": "recruiter description",
        "gts_role_status": true,
        "permissions": []
    },
    {
        "gts_role_id": 4,
        "gts_role_name": "GTS_TRAINER",
        "gts_role_description": "trainer description",
        "gts_role_status": true,
        "permissions": []
    }
]

-------------------------------------------
update a Role with Role id
PUT :  https://localhost:4711/roles/1

{
    "gts_role_name" : "GTS_JOB_SEEKER",
    "gts_role_status" : "true",
    "gts_role_description" : "job Sekker Description11"
}
------------------------------------------------------
Find Role by Role id
GET https://localhost:4711/roles/2
{
    "gts_role_id": 2,
    "gts_role_name": "GTS_EMPLOYER",
    "gts_role_description": "employeer description",
    "gts_role_status": true,
    "permissions": []
}
-------------------------------------------------------
Delete Role by id
DELETE https://localhost:4711/roles/2

Response
--------
{
    "success": "true",
    "message": "role  deleted szccessfully",
    "status_code": "200"
}
----------------------------------------------------
Add Role with Role id to a existing user
PUT  https://localhost:4711/api/v1/users/addRole

Request
-------
{
    "gts_user_id" : "3",
    "gts_user_email" : "bbb@gmail.com",
    "gts_user_password" : "5555",
    "roles" : [
        {
           "gts_role_id" : "1"
        },
        {
           "gts_role_id" : "2"

        
        }
    ]

}
Response
-------
{
    "success": "true",
    "message": "role is updated",
    "status_code": "200"
}
