const adminValidate = (res, req, next) => {

  const role = req.user.role;

  if(role === "admin") {
    next();
  } else {
    res.status(401).json({message: "Acces denied!"});
  }
};

module.exports = adminValidate;