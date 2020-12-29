# Social Media Sample Project

## Database Setup

```sql
$ mysql -u root
```

```mysql
create database socialmediadb;

create user socialuser identified by "mypass";

grant all privileges on socialmediadb.* to socialuser;

flush privileges;
```

## Project Structure

```shell
src
├───controllers         # functions to connect routes to db operations
├───db                  # db connection and model definitions
├───public              # html/css/js files for static part of site
└───routes              # express middlewares (route wise)
```
