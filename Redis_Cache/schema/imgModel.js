/**
 * Created by Vish on 5/13/2017.
 */
var mongoose = require('mongoose');
var mongourl = 'mongodb://vishwanath_iyer:hack123@ds141401.mlab.com:41401/280redis'
mongoose.Promise = global.Promise;
var connection = mongoose.createConnection(mongourl);

var imgDB = new mongoose.Schema({
    img: { data: Buffer, contentType: String},
    img_id: {type: Number}
});


var imgHandle = mongoose.model('my_images', imgDB);

module.exports = imgHandle;