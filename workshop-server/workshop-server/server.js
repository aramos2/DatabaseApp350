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
    database: "workshop"
};

const pool = new Pool(config);

// Greeting the USER 

app.get('/hello', (req, res) => {
  // console log the request query json object
  console.log(req.query);
  // console log the person parameter
  console.log(req.query.person);
  // now send a response back to the client
  res.json({response: `Hello, ${req.query.person}`});
});


// get names of attendees from a workshop if the workshop search is not in the database return a list of workshops available. 

app.get('/api', async (req, res) => {
        let searchTerm = req.query.workshop;
        console.log(`Search for attendees in the ${searchTerm} workshop`);
	try { 
               const template = "SELECT name, workshop FROM attendees WHERE workshop = $1";
		const response = await pool.query(template, [searchTerm]);
                const result = response.rows.map((row) => {return (row.name)});
               		res.json({attendees: result});
    
	} catch (err) {
	res.json( 'workshop not found'); 
		
	 
		}			

 const workshopTemp ="SELECT * FROM attendees";
                 const wtresponse = await pool.query(workshopTemp);
                 const results  = wtresponse.rows.map((row) => {return (row.workshop)});
                         res.json({ workshops: results});
                        
}) 


/* Add attendees to the workshop database that contains two agruements: 
attendees and workshop 
if either or both arguments are missing return an error 
if the attendee is already the workshop return an error
if all requires are met, the attendees name and workshop they signed up for should be returned. 
*/ 

app.post("/api", async (req, res) => {
 const attendee = req.body.name;
 const workshop = req.body.workshop;  
	
	try {
	const templateCheck = "SELECT * FROM attendees WHERE name = $1 AND workshop = $2 ";
	const check = await pool.query(templateCheck, [attendee, workshop]);
		if (check.rowCount != 0) { 
			
			res.json({error: "Attendee already signed up for this workshop."});
		}  
		
		else if (attendee == null || workshop == null){
			
			res.json({error: 'parameters not given'});
		} 
		else if (attendee == null && workshop == null) {
			
			res.json ({error: 'parameters not given'}); 
		}
		
		else {
			const templateAdd = "INSERT INTO attendees (name, workshop) VALUES ($1, $2)";
			const response = await pool.query(templateAdd, [attendee, workshop]);
			const results = response.rows.map((row) => {return (row)});
			res.json({status: "added"});
			
			res.json({workshop: results});
			} 

	} catch (err) {
	  console.log(err); 
	  }

}) 













// SERVER START
app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
