const router = require('express').Router();
const controller = require('../controllers/analyticsController');
const auth = require('../middleware/auth');
router.get('/sales-trends', auth, controller.salesTrends);
router.get('/top-products', auth, controller.topProducts);
module.exports = router;
