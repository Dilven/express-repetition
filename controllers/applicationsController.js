const Application = require('../models/application');

exports.store = (req, res) => {
  const application = Application.create({
    'name': req.body.name,
    'phone': req.body.phone,
    'message': req.body.message
  }).then(() => {
    req.flash('form', `${req.body.first_name}, you are true hero`);
    res.redirect('/');
  }).catch((err) => {
    console.log(err);
  });
}

exports.normalizeData = (req, res, next) => {
  let firstName = req.body.name.split(" ")[0];
  req.body.first_name = firstName;
  next();
};