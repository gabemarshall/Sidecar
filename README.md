# Sidecar

### Sidecar Update - Clients (develop branch 9-3-14)

Just did a little work this morning to get the clients page to correctly edit and save info on the frontend/backend.

### Sidecar Updates (develop branch 8-3-14)

Early draft of clients overview "activity" page is completed. A decent amount of work is left but the general idea is working.

![Alt text](https://dl.dropboxusercontent.com/u/16435/Sidecar/draft_activity.png "Activities")

### Sidecar 0.0.1a (6-28-14)


##### New Dependencies
* yargs

```
npm install yargs (or just npm install)
```


##### Authorization Implemented for Projects/Tasks

Projects and Tasks now have authorization in place, meaning one account can only view projects and tasks created by them (before an account would see every task/project by default). Due to the changes, any projects or tasks you may have created in the past likely won't show up anymore.

##### New Debug Functionality
I got tired of restarting the server and having to manually login again each time, so I implemented a bypass for debugging/testing. Simply run ``` sails lift --userid=<id of your account> ``` and you'll automatically be logged in as that user. This is where the *yargs* dependency comes in.

<br>
### Sidecar 0.0.1 (6-25-14)

##### New Dependencies
* bcrypt

```
npm install bcrypt (or just npm install)
```

Okay so auth is almost complete... I don't have an account creation completed so for now you'll have to cheat and create an account by pasting the following url (just once) into your browser.

```
http://localhost:1337/users/create?email=madeupemail@address.com&password=somepassword
```

Once you've done that you should have an account. You can try navigating to /app# but you should get a forbidden message since you aren't logged in.

Browse to /login, enter your credentials, and it *should* work.

From here navigate to /app#/projects , create a new project. It should show up on your list...click on it, create some tasks. That's all I have so far.

Cheers!
