const router = require('express').Router();
const controller = require('../controllers/customerController');
const auth = require('../middleware/auth');
router.get('/', auth, controller.getAll);
router.post('/', auth, controller.create);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.delete);
module.exports = router;
