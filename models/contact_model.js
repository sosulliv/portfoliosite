module.exports = (sequelize, DataTypes)=>{

let contact_message= sequelize.define('contact_message', {
	first_name: {
		type: DataTypes.STRING
	},
	last_name:  {
		type: DataTypes.STRING
	},
	email:  {
		type: DataTypes.STRING,
		validate:{
			isEmail: true
		}
	},
	message:  {
		type: DataTypes.STRING
	}
});

return contact_message;
}
