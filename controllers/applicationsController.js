exports.store = (req, res) => {
  req.flash('form', `${req.body.name.split(' ')[0]}, you are true hero`);
  res.redirect('/');
}