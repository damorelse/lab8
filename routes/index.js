var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	projects["grid"] = false;
  	//res.render('index', data);
  	res.render('index', projects)
};

exports.viewGrid = function(req, res){
	projects["grid"] = true;
	//var data = {"grid": true};
  	//res.render('index', data);
  	res.render('index', projects)
};