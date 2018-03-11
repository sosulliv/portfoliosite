import { models } from '../models/';
import helpers from '../scripts/blog_scripts'

module.exports = {
	recent: (req, res) => {
		return helpers.recent().then((data) => {
				res.send(data);
			});
	},
	all: (req, res) => {
		return helpers.all().then((data) => {
			res.send(data);
		});
	},
	view: (req, res) => {
		return helpers.recent().then((data) => {
				res.render('blog', data);
			});
			
	}
};

exports = module.exports
