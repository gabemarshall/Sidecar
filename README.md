# Sidecar

### Sidecar 0.0.1 Super Cool Alpha Instructions
<br>
##### New Dependencies
* bcrypt

```
npm install bcrypt
```
<br>
Okay so auth is almost complete... I don't have an account creation completed so for now you'll have to cheat and create an account by pasting the following url (just once) into your browser. 

```
http://localhost:1337/users/create?email=madeupemail@address.com&password=somepassword
```

Once you've done that you should have an account. You can try navigating to /app# but you should get a forbidden message since you aren't logged in.

Browse to /login, enter your credentials, and it *should* work.

From here navigate to /app#/projects , create a new project. It should show up on your list...click on it, create some tasks. That's all I have so far.

Cheers!
