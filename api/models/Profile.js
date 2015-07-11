var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProfileSchema   = new Schema({
  name: String,
  userid: String,
  username: String,
  alternate_email: String,
  biography: String,
  cellphone: String,
  currentcity:  String,
  currentcountry:String,
  email: String,
  firstname:String,
  gender: String,
  homecountry:String,
  hometown:String,
  imageurl:String,
  interests:String
});

module.exports = mongoose.model('Profile', ProfileSchema);

