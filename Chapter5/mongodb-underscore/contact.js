var _ = require("underscore");
var validations = require("./validations.js");

function Contact(_id, name, gender, company, email, phone, address) {
  var argsArray = _.toArray(arguments);

  validations.validateArgsLength(7, argsArray);
  validations.validateContactArgs(argsArray);

  this._id = _id;
  this.name = name;
  this.gender = gender;
  this.company = company;
  this.email = email;
  this.phone = phone;
  this.address = address;
  this.type = "contact";
}

module.exports = Contact;
