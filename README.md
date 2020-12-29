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

## Business Logic

### Users

1. **create users**
   this will create a new user with a random username

### Posts

1. **create posts**
   this will create a new post, required fields are

   - username (the author of this post)
   - title
   - body

2. **show all posts**
   list all existing posts, we should have following filtering support

   - filter by username
   - filter by query contained in title (search by title)

3. **edit posts** `TBD`

4. **delete posts** `TBD`

### Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**
