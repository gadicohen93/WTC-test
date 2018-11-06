

# Requirements and Specs:
## Develop an endpoint `/user/:id` that get and edit the user profile (Name, Email, Avatar) 
endpoint:
	/user/:id
		GET
		in: id
		out: success, name, email, avatar

		POST: (updates/creates)
		in: id, name, email, avatar


## We will need a frontend interface to display and edit the user profile
	http://localhost:3000/#/createUser --> creates user
	http://localhost:3000/#/getUser --> gets user, edits user if found

## On the frontend, we need to be able to display and edit the user profile offline.
	You can both create a user offline, as well as update a user profile offline (after getting it)

## We need to be able to have the user profile synchronized between the frontend and the backend when we or online
	Any POST request is queued up in IndexedDB, and any time connectivity is re-established, those requests are re-played


Install
=======
make sure MongoDB is running on port 27017  
npm install -g webpack  
npm install  

Use
====
npm start
