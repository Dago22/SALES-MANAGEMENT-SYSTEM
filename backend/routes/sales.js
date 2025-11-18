const router = require('express').Router();
const controller = require('../controllers/saleController');
const auth = require('../middleware/auth');
router.get('/', auth, controller.getAll);
router.post('/', auth, controller.create);
module.exports = router;
