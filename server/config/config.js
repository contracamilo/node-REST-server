require('dotenv').config();

let {DB_USER, DB_PASS} = process.env;

//port
process.env.PORT = process.env.PORT || 3000;

//env
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/coffee';
}else{
    urlDB = `mongodb+srv://${DB_USER}:${DB_PASS}@clusterudm.q8tua.mongodb.net/coffee`;
}

process.env.URL_DB = urlDB;