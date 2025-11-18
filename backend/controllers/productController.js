const Product = require('../models/Product');
exports.getAll = async (req, res) => { const products = await Product.find(); res.json(products); };
exports.create = async (req, res) => { const p = await Product.create(req.body); res.status(201).json(p); };
exports.update = async (req, res) => { const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(p); };
exports.delete = async (req, res) => { await Product.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); };
