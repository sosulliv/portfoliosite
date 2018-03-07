import secret_sauce from  '../config/secret_sauce.json';
import Sequelize from 'sequelize';
const sequelize = new Sequelize('mysql://root:'+secret_sauce.crazy+'@localhost:3306/portfolio_db');


const contact_model= sequelize.define('contact_message', {
	first_name: Sequelize.STRING,
	last_name: Sequelize.STRING,
	email: Sequelize.STRING,
	message: Sequelize.STRING

});

//burger.sync();


export default contact_model;
