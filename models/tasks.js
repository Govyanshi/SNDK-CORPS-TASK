var mongoose = require('mongoose');
var Schema = mongoose.Schema;

TaskSchema = new Schema( {
        taskId:Number,
	    taskDescription:String,
		createdBy: String,
		projectId: Number,
		projectStatus:String,
		createdAt:Date,
		completedAt:Date,
		assignedTo:String
}),
Task = mongoose.model('Task', TaskSchema);

module.exports = Task;