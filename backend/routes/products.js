const router = require('express').Router();
const { getAll, create, update, delete: del } = require('../controllers/productController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');
router.get('/', auth, getAll);
router.post('/', auth, authorize(['admin','staff']), create);
router.put('/:id', auth, authorize(['admin','staff']), update);
router.delete('/:id', auth, authorize('admin'), del);
module.exports = router;
