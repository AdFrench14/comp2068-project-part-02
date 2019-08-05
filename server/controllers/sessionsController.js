const User = require('../models/user');
const jwt = require("jsonwebtoken");

exports.authenticate = (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if(!user) throw new Error('Error: Your credentials do not match');
            user.authenticate(req.body.password, (err, isMatch) => {
                if(err) throw new Error(err);

                if(isMatch) {
                    req.session.userId = user.id;
                     
                    const token = jwt.sign({payload: req.body.email}, "bobsyouruncle",{expiresIn: "2h"}
                    );
                    res.cookie('token', token, {httpOnly: true});
                }
                else {
                    res.json({error: 'Your credentials do not match'});
                }
            });
        })
        .catch(err => {
            res.json(err);
        });
};

exports.logout = (req, res) => {
    if (!req.isAuthenticated())
      res.status(401).send({ error: "Could not authenticate request" });
  
    req.session.userId = null;
    res
      .clearCookie("token")
      .status(200)
      .send({ success: "Your are now logged out" });
  };
