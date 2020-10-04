require('dotenv').config()

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










/* Add attendees to the workshop database that contains two agruements: 
attendees and workshop 
if either or both arguments are missing return an error 
if the attendee is already the workshop return an error
if all requires are met, the attendees name and workshop they signed up for should be returned. 
*/ 







// SERVER START
app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
