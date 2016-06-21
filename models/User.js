var mongoose = require('mongoose');
var auditLog = require('audit-log');

var userSchema = mongoose.Schema({
    name: {type:String,unique:true,required:true},
    age:String,
    gender:String
});

/*var pluginFn = auditLog.getPlugin('mongoose', {modelName:'User', namePath:'name'}); // setup occurs here 
userSchema.plugin(pluginFn.handler);*/

userSchema.plugin(require('mongoose-audit'));

module.exports = mongoose.model('User', userSchema);