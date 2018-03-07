import secret_sauce from  '../config/secret_sauce.json';
import Sequelize from 'sequelize';
const sequelize = new Sequelize('mysql://root:'+secret_sauce.crazy+'@localhost:3306/portfolio_db');


const blog_model= sequelize.define('blog_message', {
	author: Sequelize.STRING,
	title: Sequelize.STRING,
	date: Sequelize.DATE,
	url: Sequelize.STRING,
	excerpt: Sequelize.STRING,
	message: Sequelize.STRING

});



export default blog_model;
