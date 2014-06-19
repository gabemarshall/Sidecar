# Sidecar API

![SideCar icon](http://)

----
## Projects
<br>
#### Create

```
POST /projects/create 
```
Create a new project using the following parameters:

- title:string
- client:id (optional)
- due: datetime (optional)
- progress: integer (optional)

<br>
#### Read

```
GET /projects
```
Retrieve all projects

<br>

```
GET /projects/:id    (Retrieve project with specified id)
```
Retrieve project with specified id

<br>

#### Update

```
POST /projects/update/:id
```
Update project specified by id

<br>

### Delete
```
POST /projects/delete/:id
```
Delete project specified by id