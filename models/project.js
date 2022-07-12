var mongoose = require('mongoose');
var Schema = mongoose.Schema;

projectSchema = new Schema( {
	projectId:Number,
	projectName: String,
	projectMembers: String,
	projectAdmins: String,
}),
Project = mongoose.model('Project', projectSchema);

module.exports = Project;