const express = require('express');
const bcrypt = require("bcrypt");
const app = express();
const User = require ('../models/user');
const _ = require('underscore');
const user = require('../models/user');

//read
app.get('/users', function (req, res) {

  let { query } = req;
  let since = Number(query.since) || 0;
  let limit = Number(query.limit) || 5;
  
  User.find({ state: true }, 'name email role state google img')
    .skip(since)
    .limit(limit)
    .exec((err, users) => {
    if(err) {
			res.status(400).json({
				ok: false,
				err,
			});
    }

    User.countDocuments({state: true}, (err, count) => {
      
      res.json({
        ok: true,
        users,
        total: count
      });
    });
    
  });

});

//create
app.post ('/users', function (req, res) {
  let {body} = req;

  let user = new User ({
    ...body,
    password: bcrypt.hashSync(body.password, 10)
  });

  user.save((err, dbUser) => {
      
    if(err){
        res.status (400).json({
          ok: false,
          err
        });
    }
      
    res.json({
        ok: true,
        user: dbUser,
    });
  });
});

//update
app.put("/users/:id", function (req, res) {
  let { params, body } = req;
  let id = params.id;
  let checkBody = _.pick(body, ['name', 'email', 'img', 'role', 'state']);

	User.findByIdAndUpdate(id, checkBody, {new: true, runValidators: true}, (err, userDB) => {
		if(err) {
			res.status(400).json({
				ok: false,
				err,
			});
		}

		res.json({
      ok: true,
      user: userDB
		});
	});
});

//delete
app.delete ('/users/:id', function (req, res) {
  let { params } = req;
  let id = params.id;
  const changeState = {
    state: false
  }

	User.findByIdAndUpdate(id, changeState, {new: true}, (err, userDB) => {
		if(err) {
			res.status(400).json({
				ok: false,
				err,
			});
		}

		res.json({
      ok: true,
      user: userDB
		});
	});
});

module.exports = app;
