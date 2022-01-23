const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const UserSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true },
    nip: { type: String, require: true, unique: true },
    city: { type: String, require: true },
    nameOfCompany: { type: String, require: true },
    postalCode: { type: String, require: true },
    password: { type: String, require: true }
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", UserSchema);
