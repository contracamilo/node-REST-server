const express = require ('express');
const app = express ();
const bodyParser = require ('body-parser');

/* 
middlewares
    parse application/x-www-form-urlencoded
    parse application/json
*/
app.use (bodyParser.urlencoded ({extended: false}));
app.use (bodyParser.json ());

//read
app.get ('/users', function (req, res) {
  res.json ('Hello World');
});

//create
app.post ('/users', function (req, res) {
  let {body} = req;

  res.json ({
    user: body
  });
});

//update
app.put ('/users/:id', function (req, res) {
  let {params} = req;

  res.json ({
    id: params.id,
  });
});

//delete
app.delete ('/users', function (req, res) {
  res.json ('Hello World');
});

app.listen (3000, () => {
  console.log ('listen on port: 3000');
});
