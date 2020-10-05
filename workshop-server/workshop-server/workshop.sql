\t results = response.rows.map((row) => {return (row)});  postgres 

DROP DATABASE IF EXISTS workshop;
CREATE DATABASE workshop;
\c workshop 

CREATE TABLE attendees (
		id SERIAL PRIMARY KEY,
			name TEXT,
				workshop TEXT
			); 


			INSERT INTO attendees (name, workshop) VALUES 
				('Ahmed Abdelali', 'DevOps 101'),
				('Anne Frank', 'Docker Container Fundamentals'),
				('Ann Mulkern', 'Machine Learning'),
				('Clara Weick', 'Modern Javascript'),
				('James Archer', 'MongoDB'),
				('Linda Park', 'React Fundamentals'),
				('Lucy Smith', 'Self-Driving Cars'),
				('Ann Nowicki', NULL),
				('Samantha Eggert', 'DevOps 101'),
				('Tim Smith', 'DevOps101'),
				('Ahmed Abdelali', 'Docker Container Fundamentals'),
				('Ann Mulkern', 'Docker Container Fundamentals'); 
