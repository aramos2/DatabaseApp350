\t results = response.rows.map((row) => {return (row)});  postgres 

DROP DATABASE IF EXISTS workshop;
CREATE DATABASE workshop;
\c workshop 

CREATE TABLE attendees (
		id SERIAL PRIMARY KEY,
			name TEXT,
				workshop TEXT
			); 
