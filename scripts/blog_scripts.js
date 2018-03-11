
const models = require('../models');

module.exports = {
	recent: ()=>{
	return models.blog_message.findAll({
		limit: 10,
		order: [
			["date"]
		]
	}).then((dbBlog)=>{
		let hbsObject = {
			post: dbBlog
		};
		 return(hbsObject);
	});
},
all: function (req, res) {
	return models.blog_message.findAll({
		order: [
			["date"]
		]
	}).then(dbBlog => {
		let hbsObject = {
			post: dbBlog
		};
		console.log(hbsObject);
		return next(hbsObject);
	});

}
  }

