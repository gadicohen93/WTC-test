var express = require('express');
var passport = require('passport');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

var Account = require("../models/account");

router.get('/:id', function (req, res, next) {
  Account.findOne({_id: req.params.id}, function(err, user)
  {
    if (err)
    {
        return next(err);
    }
    if (user)
    {
        return res.send(JSON.stringify({success: true, name: user.name, email: user.email, avatar: user.avatar}))
    }
    else
    {
        return res.send(JSON.stringify({success: false, message: 'did not find account'}))
    }
  });

})


// POST method route
router.post('/:id', function (req, res) {
    var user_id = req.params.id;
    var email = req.body.email;
    var name = req.body.name;

    Account.findOneAndUpdate({_id: user_id}, req.body, {upsert: true}, function(err, user)
        {
            console.log(user_id);
            if (err)
            {
                console.log("Error: " + err);
            }
        }
    );

    res.send('User updated: ' + user_id)
})

// POST method route
router.post('/', function (req, res) {
    var email = req.body.email;
    var name = req.body.name;
    var avatar = req.body.avatar;

    var user = new Account({email: email, name: name, _id: new ObjectID(), avatar: avatar});
    user.save(function(err)
    {
        if (err)
        {
            console.log("Error: " + err);
        }
        else
        {
            console.log(user._id);
        }
    });

    res.send(user._id);
})

module.exports = router;