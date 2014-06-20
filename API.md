# Sidecar API

![SideCar icon](./assets/img/logo.png)

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

<br><br>

## Tasks
<br>
#### Create

```
POST /tasks/create 
```
Create a new task using the following parameters:

- title:string
- completed: boolean
- project:id (Project to associate the task with)

<br>
#### Read

```
GET /tasks
```
Retrieve all tasks

<br>

```
GET /tasks/:id    (Retrieve project with specified id)
```
Retrieve task with specified id

<br>

#### Update

```
POST /tasks/update/:id
```
Update task specified by id

<br>

### Delete
```
POST /tasks/delete/:id
```
Delete task specified by id