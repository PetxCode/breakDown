const mongoose = require("mongoose");

const myData = require("./Model");

exports.getAllEntry = async (req, res) => {
  const newData = await myData.find();
  res.status(200).json(newData);
};

exports.createEntry = async (req, res) => {
  const newData = await myData.create(req.body);
  res.status(201).json(newData);
};

exports.getSingleEntry = async (req, res) => {
  const newData = await myData.findById(req.params.id);
  res.status(200).json(newData);
};

exports.updateSingleEntry = async (req, res) => {
  const newData = await myData.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(newData);
};

exports.deleteSingleEntry = async (req, res) => {
  const newData = await myData.findByIdAndDelete(req.params.id, req.body);
  res.status(200).json(newData);
};
