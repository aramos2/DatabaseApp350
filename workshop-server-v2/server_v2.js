require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.set("port", 8080); 

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

const Pool = require("pg").Pool;
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "workshop_v2"
};

const pool = new Pool(config);


// creates user 

app.post('/create user', async (req, res) => {

const firstname = req.body.firstname;
const lastname = req.body.lastname; 
const username = req.body.username;
const email = req.body.email; 

const templateName = "INSERT INTO user_name (firstname, lastname) VALUES ($1, $2)";
	var response = await pool.query(templateName); 

const templateInfo = " INSERT INTO user_info (username, email) VALUES ($3, $4)"; 
	if (check.rowCount == null) {
		var response_2 = await pool.query(templateInfo);
		{"status: user added"}
	}
	else {
		{"status: username taken"}
	}
});

// Enrolls user in a workshop
app.post("/enroll", async (req, res) => {
  console.log(req.body);
  const title = req.body.title;
  const date = req.body.date;
  const location = req.body.location;
  const username = req.body.username;
  
try {
	if () {

		res.json ({"status": "user not in database"});
	}
	else if ( ) {

		res.json ({"status": "workshop does not exist"};)
	}
	else if () {

		res.json ({"status": "user already enrolled"});
	}
	else if () {

		res.json ({"status": "no seats available"}); 
	}
	else {
		const templateEnroll =
		"SELECT id FROM workshops WHERE title = $1 AND time = $2 AND location = $3;";
		const enResponse = await pool.query(templateEnroll, [title, time, location]);
		console.log(enResponse.rows);
		const wid = enResponse.rows[0].id;
		console.log(wid);

		const templateUser = "SELECT user_id FROM users WHERE username = $1;";
		const usResponse = await pool.query(usTemplate, [username]);
		const uid = usResponse.rows[0].user_id;
		console.log("users" + u_id);

    		const insertTemplate ="INSERT INTO enrollUser (workshop, attendee) VALUES ($1, $2);";
		await pool.query(templateAdd, [wid, uid]);
		res.json({ status: "user added" });
	}
} catch (err) {
    console.log(err);
    res.json({ status: "server error" });
  }
});


// returns a list users and their details 
app.get("/list-users", async (req,res) => {



}); 


// returns a list of workshops
app.get( "/list-workshops", async (req, res) => {



});

// returns attendees from a workshop
app.get ( "/attendees", async (req, res) => {



});

//deletes user data from database
app.delete ("/delete-user", async (req,res) => {



});



// SERVER START
app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
