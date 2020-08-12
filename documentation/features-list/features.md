# Tea With Strangers Clone

Steven - Model Lead 

Shaie - UX lead 

Tadeo - Project Lead

<br>
<br>


# Features

## 1. Sign up / Sign in (Day 1,2 Monday & Tuesday)
        - As a person who would like to use this website

        - I want to be able to sign up and log in

        - So that that I can join the community 


## 2. Join a meeting (Day 2, Tuesday)

        - As a person who likes a particular hobby/drink

        - I want to join a group 

        - So that I can meet others who also share the same interest


## 3. Access dashboard (Day 3, Wednesday)

        - As a user who likes to keep track of my events

        - I want to be able to access a dashboard

        - so that I can see them all in one place


## 4. Host events (Day 4, Thursday)

        -As a person who likes to organize events

        -I want to host an event

        -so that I can share my hobby with others 


## 5. Google API * BONUS * (Day 5, Friday)

        -As a person who is interested in sharing cultures

        -I want to view where everyone is on Google Maps

        -so that I can know where everyone is from


## 6. Provide user suggestions *BONUS* (Day 6, Saturday)

        -As a host who wants to set a theme

        -I want to be able to offer suggestions

        -So everyone can participate


## 7. Edit profile (Day 7, Sunday)

        -As a user who likes to interact with other users

        -I want to be able to customize my profile

        -So that I can express myself 




## Front-End:
layout.pug

GET /home 
landing.pug

GET /signup
signup.pug

GET /login
login.pug

GET /events
events-list.pug

GET /events/create

GET /events/:id
event.pug

GET /events/:id/edit

GET /user/dashboard
dashboard.pug

GET /user/:id *BONUS*
profile-page.pug

GET /user/edit *BONUS* 


## Back-End:

POST /signin

POST /signup

POST /events/create
event-create.pug

PUT /events/:id/edit
event-edit.pug // optional

PUT /user/edit *BONUS*
profile-edit.pug // optional













