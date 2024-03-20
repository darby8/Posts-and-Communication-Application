const User = require("../models/User")


exports.login=function(){

}

exports.logout = function(){}

exports.register =function(req,res){
    console.log(req.body)
    let user=new User(req.body)
    user.register()
    res.send("Thanks for sugnulp")
}

exports.home = function(req,res){
        res.render('home-guest')
}