import express from 'express';
//import  main from '../models/main.js';
import contact_model from '../models/contact_model.js';


let contact_router = express.Router();
contact_model.sync();

contact_router.get('/contact', function (req, res) {
	//get_burgers();
	res.redirect('/contact');
});

 //Create a New Message
 contact_router.post('/message/create', function (req, res) {

	contact_model.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		message: req.body.message,
	}
	)
	.then(

		// console.log(message);
			res.redirect('/')
			//console.log(burgers.get('burger_name')); // John Doe (SENIOR ENGINEER)
			//console.log(burgers.get('devoured')); // SENIOR ENGINEER
	);
 });


	export default contact_router;
