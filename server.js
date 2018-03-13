import express from 'express';
//remove open import in production
import open from 'open';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import routes from './routes'
//import 
import db from './models'

/* eslint-disable no-console*/

//set port to the right settings ready for production deploy
const PORT = process.env.PORT || 3006;
const app = express();
//get the current enviroment to check for an auto open the app if in dev
const ENV = app.get('env');

//minimized body parser passings
app.use(bodyParser.json());
//we shouldn't be taking any objs or arrays through url encoded bad for sec so set to false
app.use(bodyParser.urlencoded({ extended: false }));

//setip express
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//refactored to not use file path
app.use(express.static("public"));

//we only need to use routes all appropiate controll should be passed on to controller
app.use(routes);


//sync the db before running the app
db.sequelize.sync().then(() => {
	//run the app
	app.listen(PORT, (err) => {
		//log errors
		if (err) { console.log(err); }
		else {
			//console the current port
			console.log(`listening on Port: ${PORT}`);
			//open app in dev enviroment with default browser
			if(ENV==='development'){
				open(`http:localhost:${PORT}/`)
			}
		};	
	});
});
