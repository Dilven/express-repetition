"use strict"

exports.store = (req, res) => {
  console.log(req.body.first_name)
  req.flash('form', `${req.body.first_name}, you are true hero`);
  res.redirect('/');
}

exports.normalizeData = (req, res, next) => {
  let firstName = req.body.name.split(" ")[0];
  req.body.first_name = firstName;
  next();
};