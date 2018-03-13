const db = require('../models');

module.exports = {
	create: function (req, res){
		db.contact_message.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			message: req.body.message,
		}).then(data =>{
			const payload = {
				data: 'ok'
			}
			res.send('ok');
		});
	}
};


exports = module.exports;
