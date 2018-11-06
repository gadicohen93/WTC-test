

# Specifications:
## Develop an endpoint `/user/:id` that get and edit the user profile (Name, Email, Avatar) 

URL: /user/:id 
### GET  - to get user account
	in: id (as parameter)
	out: success, name, email, avatar  
### POST: - to update and create a user account 
	in: id (to update), name, email, avatar  
For code, see server/api/getUser.js

## We will need a frontend interface to display and edit the user profile
	http://localhost:3000/#/createUser --> creates user  
	http://localhost:3000/#/getUser --> gets user, edits user if found  
For code, see app/components

## On the frontend, we need to be able to display and edit the user profile offline.
You can both create a user offline, as well as update a user profile offline (after getting it). First, get a user details (http://localhost:3000/#/getUser), then update name, email and avatar. Offline functionality was built using a service worker (https://developers.google.com/web/fundamentals/primers/service-workers/).  
For code, see public/sw.js  

## We need to be able to have the user profile synchronized between the frontend and the backend when we or online
Any POST request made when the user is offline is queued up in IndexedDB. Any time connectivity is re-established, those requests are re-played, which allows the user profile to be synchronized when the user is back online.  


# Instructions
Install
=======
make sure MongoDB is running on port 27017  
npm install -g webpack  
npm install  

Run
====
npm start
