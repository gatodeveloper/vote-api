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


module.exports.vote = vote;
function vote(id, vote) {
  let query = {_id: id}

  return new Promise((resolve, reject) =>{

    News.findOne(query, function(err, doc){
      if(!doc) return reject(err);

      console.log(doc, vote);
      if(vote == 'up') doc.votes.up = doc.votes.up+1;
      if(vote == 'down') doc.votes.down = doc.votes.down+1;
      doc.save();

      resolve(doc);

    });

  });

};
