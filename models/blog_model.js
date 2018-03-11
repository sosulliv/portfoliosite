
//redid model structure to work with sequelize cli so we don't have to define db config in each model
module.exports = (sequelize, DataTypes) => {
	let blog_message = sequelize.define("blog_message", {
		author: {
			type: DataTypes.STRING
		},
		title: {
			type: DataTypes.STRING
		},
		date: {
			type: DataTypes.DATE
		}
		,
		url: {
			type: DataTypes.STRING
		},
		excerpt: {
			type: DataTypes.STRING
		},
		message: {
			type: DataTypes.STRING
		}
	});

	return blog_message;
}
