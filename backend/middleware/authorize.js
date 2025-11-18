module.exports = (roles = []) => (req, res, next) => {
  if (typeof roles === 'string') roles = [roles];
  const userRole = req.user?.role;
  if (!userRole || (roles.length && !roles.includes(userRole))) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};
