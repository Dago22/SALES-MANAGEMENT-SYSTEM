const Customer = require('../models/Customer');
exports.getAll = async (req, res) => res.json(await Customer.find());
exports.create = async (req, res) => res.status(201).json(await Customer.create(req.body));
exports.update = async (req, res) => res.json(await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.delete = async (req, res) => { await Customer.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); };
