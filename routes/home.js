
/*
 * GET home page.
 */
var data = require('../public/tasks.json');
var data2 = require('../accountInfo.json');


exports.login = function(req,res){
   var userName = req.query.userName;
   var passWord = req.query.password;
   var count = Object.keys(data2.accountInfo).length  ;
   var newAccountInfo = {
                    "userName" : userName,
                    "password" : passWord,
                    "id" : count
   } 

   data2.accountInfo.push(newAccountInfo);
   console.log(newAccountInfo);

  res.render('home',{

    "welcome" : "welcome to the reminder " + userName +"!"
  });
}


/*exports.removeTask = function(req,res){

    var projectId = req.params.id;
    projectId = parseInt(projectId);
    console.log(projectId);
    data.tasks.splice(projectId,1);
    console.log(data);

    res.render('home',data);
}*/
