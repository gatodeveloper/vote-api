const Users = require('../models/users.model');

module.exports.create = create;
function create(data) {
	return Users.create(data);
};

module.exports.getAll = getAll;
function getAll() {
	return Users.find({});
};

module.exports.getById = getById;
function getById(id) {
	return Users.findOne({_id:id});
};

module.exports.login = login;
function login(email, password) {
	return Users.findByCredentials(email, password)
};


