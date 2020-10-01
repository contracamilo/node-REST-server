const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("./config/config");

const {PORT} = process.env;

/* 
middlewares
    parse application/x-www-form-urlencoded
    parse application/json
*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(require("./routes/index"));

const connectDB = async () => {
	await mongoose.connect(process.env.URL_DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	});

	console.log("DB connected");
};

connectDB();

app.listen(PORT, () => {
	console.log(`listen on port: ${PORT}`);
});
