const mongoose = require('mongoose');
const config = require('../../config');

const mongoConfig = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	autoIndex: false,
	reconnectTries: 30,
	reconnectInterval: 500,
	poolSize: 10,
}

const connectWithRetry = () => {

	mongoose.connect(config.db.connectionString, mongoConfig);
	mongoose.connection
	 .once('open', () => console.log('DB Connected!'))
	 .on('error', (error) => {
	 	console.warn('Warning!!, MongoDB connection unsuccessful, retry after 5 seconds.', error);
	 	setTimeout(connectWithRetry, 5000)
	 });

}

connectWithRetry()


module.exports = {
	mongoose:mongoose,
};