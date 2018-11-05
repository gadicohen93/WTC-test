var mongoose = require("mongoose");

var acctSchema = mongoose.Schema({
    _id: {type: String, unique: true},
    name: {type: String, required: true, unique:false},
    email: {type: String, required: true},
    avatar: {type: String}
});

acctSchema.methods.getId = function () {
    return this._id;
}

module.exports = mongoose.model("Account", acctSchema);
