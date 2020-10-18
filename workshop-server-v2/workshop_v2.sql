\t results = response.rows.map((row) => {return (row)});  postgres 

DROP DATABASE IF EXISTS workshop_v2;
CREATE DATABASE workshop_v2;
\c workshop_v2 

-- Tables that contain user information

CREATE TABLE user_name (
	
	user_id integer PRIMARY KEY,
	firstname text,
	lastmane text	
);

CREATE TABLE user_info (

	u_info_id integer PRIMARY KEY,
	username text,
	email text
);

CREATE TABLE users (
	
	user_id integer REFERENCES user_name(user_id),
	user_info_id integer REFERENCES user_info(u_info_id),
	PRIMARY KEY (user_id, u_info_id)  
);

-- user info end


-- workshop info starts

CREATE TABLE workshop_name (
	
	name_id integer PRIMARY KEY;
	title text,
	date _____,
	location, 

);

CREATE TABLE workshop_details (
	
	info_id integer PRIMARY KEY, 
	instructor text,
	maxSeat integer

); 


CREATE TABLE workshop (
	name_id integer REFERENCES workshop_name(name_id),
	info_id integer REFERENCES workshop_details(info_id),
	PRIMARY KEY (name_id, info_id) 
); 

-- end of workshop info 

-- worksop info end  


