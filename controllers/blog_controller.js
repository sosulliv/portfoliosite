import express from 'express';
//import  main from '../models/main.js';
import blog_model from '../models/blog_model.js';


let blog_router = express.Router();
blog_model.sync();

//console.log(blog_router);

 blog_router.get("/blog", function (req, res) {
//	console.log(req);

	// replace old function with sequelize function
	blog_model.findAll({
		limit: 10,
		// Here we specify we want to return our burgers in ordered by ascending burger_name
		order: [
			["date"]
		]
	})
		// use promise method to pass the burgers...
		.then(dbBlog => {
			//console.log(dbBlog);
			// into the main index, updating the page
			var hbsObject = {
				post: dbBlog
			};

			console.log(hbsObject);

			//console.log(hbsObject);
			return res.render("blog", hbsObject);
		});
});



	export default blog_router;
