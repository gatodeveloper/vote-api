module.exports = (function(){

  var initConfig = {
    db: {
      connectionString: 'mongodb+srv://G4t04dm1n:W0TGPRf7ekUbE44O@cluster0-olsgc.mongodb.net/test?retryWrites=true&w=majority'
    },
    JWT_KEY: 'GatoDeveloper'
  };

  var envConfig = require('./env/' + (process.env.NODE_ENV ? process.env.NODE_ENV : 'development'));
  var config = Object.assign(initConfig, envConfig);
  console.log(config);
  return config;
})();