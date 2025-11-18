const Sale = require('../models/Sale');
const Product = require('../models/Product');

exports.salesTrends = async (req, res) => {
  const from = new Date(req.query.from || 0);
  const to = new Date(req.query.to || Date.now());
  const data = await Sale.aggregate([
    { $match: { date: { $gte: from, $lte: to } } },
    { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } }, total: { $sum: "$total" } } },
    { $project: { date: "$_id", total: 1, _id: 0 } },
    { $sort: { date: 1 } }
  ]);
  res.json(data);
};

exports.topProducts = async (req, res) => {
  const limit = parseInt(req.query.limit || '10', 10);
  const data = await Sale.aggregate([
    { $unwind: "$items" },
    { $group: { _id: "$items.product", sold: { $sum: "$items.qty" } } },
    { $lookup: { from: 'products', localField: '_id', foreignField: '_id', as: 'product' } },
    { $unwind: "$product" },
    { $project: { _id: 0, name: "$product.name", sold: 1 } },
    { $sort: { sold: -1 } },
    { $limit: limit }
  ]);
  res.json(data);
};
