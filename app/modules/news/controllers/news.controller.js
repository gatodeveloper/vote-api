var newsServices = require('../services/news.service');

var exports = module.exports;

exports.create = function(req, res){
  
  var data = req.body;

  newsServices.create(data)
    .then( result => {
      res.send(result);
    })
    .catch( error => {
      console.log(error);
    });
}

exports.getById = function(req, res){
  let id = req.params.id;
  console.log('=======> id', id);
  newsServices.getById(id)
    .then( result => {
      res.send(result);
    })
    .catch( error => {
      console.log(error);
    });
}

exports.getAll = function(req, res){
  newsServices.getAll()
    .then( result => {
      res.send(result);
    })
    .catch( error => {
      console.log(error);
    });
}

exports.delete = function(req, res){
  let id = req.params.id;
  newsServices.delete()
    .then( result => {
      res.send(result);
    })
    .catch( error => {
      console.log(error);
    });
}