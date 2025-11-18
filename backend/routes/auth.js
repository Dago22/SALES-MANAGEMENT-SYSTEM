const router = require('express').Router();
const { register, login, assignRole } = require('../controllers/authController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
router.post('/register', register);
router.post('/login', login);
router.post('/assign-role', auth, authorize('admin'), assignRole);
module.exports = router;
