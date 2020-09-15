const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let validRoles = {
	values: ['ADMIN_ROLE', 'USER_ROLE'],
	message: '{VALUE} must be a valid user role'
}

const userSchema = new Schema({
	name: {type: String, required: [true, "Name is required"]},
	email: {
        type: String, 
        required: [true, "Email is required"],
        unique: true
    },
	password: {type: String, required: [true, "password is required"]},
	role: {
		type: String, 
		default: "USER_ROLE",
		enum: validRoles
	},
	img: String,
	google: {type: Boolean, default: false},
	state: {type: Boolean, default: true},
	creationDate: {type: Date, default: Date.now},
});

//to delete the fied password from reponse
userSchema.methods.toJSON = function() {
	let user = this;
	let userObject = user.toObject();
	delete userObject.password;

	return userObject;
}

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique'})

module.exports = mongoose.model("User", userSchema);
