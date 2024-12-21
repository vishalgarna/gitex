const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const db1 = mongoose.createConnection('mongodb+srv://vishalgarna:vishalgarna%401@cluster0.uxsnu.mongodb.net/UserAndStrategies', {

});

db1.on('error', console.error.bind(console, 'connection error:'));
db1.once('open', () => {
    console.log('Connected to db1');
});


module.exports = { db1 };
