var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
var ProfileSchema   = new Schema({
  name: String,
  userid: String,
  username: String,
  alternate_emails: [Alternate_emails],
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
  interests:[Interests],
  education:[Education],
  work:[Work],
  car:[Car]
});
var Car = new Schema({ driver: ObjectId })
var Alternate_emails = new Schema({
  name:String
});

var Interests = new Schema({
  name:String
});

var Education = new Schema({

  _id:ObjectId,
  school:String,
  type: String,
  from_year:Date,
  to_year:Date
});

var Work = new Schema({
  id:ObjectId,
  company:String,
  from_month: Date,
  from_year:Date,
  to_month: Date,
  to_year:Date,
  current: Boolean
});

module.exports = mongoose.model('Profile', ProfileSchema);

