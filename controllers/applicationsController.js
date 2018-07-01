const Application = require('../models/application');

exports.store =  async (req, res, next) => {
  try {
    await Application.create({
      'name': req.body.name,
      'phone': req.body.phone,
      'message': req.body.message
    })
  } catch (error) {
    next(error)
  }
  
    req.flash('form', `${req.body.first_name}, you are true hero`);
    res.redirect('/');
}

exports.normalizeData = (req, res, next) => {
  let firstName = req.body.name.split(" ")[0];
  req.body.first_name = firstName;
  next();
};