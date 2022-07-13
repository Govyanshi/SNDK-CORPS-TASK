var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Project = require("../models/project")
var Task = require("../models/tasks")
router.get('/', function (req, res, next) {
	return res.render('index.hbs');
});

router.get('/tasks',function(req,res,next){
	Project.find()
            .then(projectData=> {
				console.log(projectData)
				Task.find() .then(taskData => { 
                return res.render('tasks.hbs',{projectData,taskData})
                 })
            .catch(error => {
				console.log(error);
				return res.render('tasks.hbs')
             })	
            })
            .catch(error => {
                console.log(error);
            })
	
})

router.post('/api/tasks',function(req,res,next){
	//console.log("inside task api",req.body);
	var taskInfo = req.body;
	var newTask = new Task({
		taskId:taskInfo.taskId,
		taskDescription:taskInfo.taskDescription,
		createdBy: taskInfo.createdBy,
		projectId: taskInfo.projectId,
		projectStatus:taskInfo.status,
		createdAt:Date.now(),
		completedAt:null,
		assignedTo:taskInfo.assignedTo
	});

	newTask.save(function(err, Task){
		console.log('in')
		if(err)
			console.log('error',err);
		else{
			console.log('success!!!!')
			res.send({"Success":"Task has been added."})
		}
	});
})
router.post('/api/edit-tasks',async function(req,res,next){
	console.log("inside edit task api",req.body);
	var {status,taskId} = req.body;
	console.log('status',status)
	var date = Date.now().toString();
	console.log('date',date,taskId)
const update = { projectStatus: status,completedAt:date };

// `doc` is the document _before_ `update` was applied
let doc = await Task.findOneAndUpdate(taskId, update);
})

router.post('/', function(req, res, next) {
	console.log(req.body);
	var personInfo = req.body;


	if(!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf){
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			User.findOne({email:personInfo.email},function(err,data){
				if(!data){
					var c;
					User.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}

						var newPerson = new User({
							unique_id:c,
							email:personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
							passwordConf: personInfo.passwordConf,
						});

						newPerson.save(function(err, Person){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"You are regestered,You can login now."});
				}else{
					res.send({"Success":"Email is already used."});
				}

			});
		}else{
			res.send({"Success":"password is not matched"});
		}
	}
});

router.get('/login', function (req, res, next) {
	return res.render('login.hbs');
});

router.post('/login', function (req, res, next) {
	//console.log(req.body);
	User.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password){
				//console.log("Done Login");
				req.session.userId = data.unique_id;
				//console.log(req.session.userId);
				res.send({"Success":"Success!"});
				
			}else{
				res.send({"Success":"Wrong password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
});

router.get('/project', function (req, res, next) {
	Project.find()
            .then(data => {
                console.log("Projects")
                console.log(data);
				return res.render('project.hbs',{data})
            })
            .catch(error => {
                console.log(error);
            })
});

router.get('/logout', function (req, res, next) {
	console.log("logout")
	if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
    	if (err) {
    		return next(err);
    	} else {
    		return res.redirect('/');
    	}
    });
}
});

router.post('/project',function(req,res,next){
	var projectInfo = req.body;
	var newProject = new Project({
		projectId:projectInfo.projectId,
		projectName:projectInfo.projectName,
		projectMembers: projectInfo.projectMembers,
		projectAdmins: projectInfo.projectAdmins
	});

	newProject.save(function(err, Project){
		if(err)
			console.log(err);
		else{
			res.send({"Success":"You are regestered,You can login now."})
		}
	});
})


module.exports = router;