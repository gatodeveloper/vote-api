const News = require('../models/news.model');

module.exports.create = create;
function create(data) {
	return News.create(data);
};


module.exports.getAll = getAll;
function getAll() {
	return News.find({});
};

module.exports.getById = getById;
function getById(id) {
	return News.findOne({_id:id});
};
