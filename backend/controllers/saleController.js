const Sale = require('../models/Sale');
const Product = require('../models/Product');
exports.getAll = async (req, res) => res.json(await Sale.find().populate('customer').populate('items.product'));
exports.create = async (req, res) => {
  const { items, customer } = req.body;
  let total = 0;
  for (const it of items) {
    total += it.qty * it.price;
    await Product.findByIdAndUpdate(it.product, { $inc: { stock: -it.qty } });
  }
  const sale = await Sale.create({ items, customer, total });
  res.status(201).json(sale);
};
