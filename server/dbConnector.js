import mongoose from 'mongoose';

let dbURI = 'mongodb://localhost/pec2016';

// MongoLab documentation: http://docs.mongolab.com/
// connection string: mongodb://adbuser:mydbpassword@ds5342322.mongolab.com:5342322/myproj-dev
// set string in terminal: $ heroku config:set MONGOLAB_URI=your_db_uri

if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
};

mongoose.Promise = global.Promise;
// mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true });