const { use } = require("../app")
const User = require("../models/User")


exports.login=function(req,res){
    let user =new User(req.body)

  // Using call backs
    
    // user.login(function(result){
    //     res.send(result)
    // })



    // Useing promises

    user.login().then(function(result){
      req.session.user = {username:user.data.username}
      // res.send(result)
      req.session.save(function(){
        res.redirect('/')
      })
    }).catch(function(e){
      // res.send(e)
      req.flash('errors',e)
      req.session.save(function(){
      res.redirect('/')
      })
    })
}

exports.logout = function(req,res){
  req.session.destroy(function(){
    res.redirect('/')
  })
 
}

exports.register =function(req,res){
    let user = new User(req.body)
    user.register()
    if (user.errors.length) {
      // res.send(user.errors)
      user.errors.forEach(function(error){
        req.flash('regErrors',error)
      })
      req.session.save(function(){
        res.redirect('/')
      })
    } else {
      res.send("Congrats, there are no errors!.")
    }
}

exports.home = function(req,res){
        // res.render('home-guest')
        if(req.session.user){
          res.render('home-dashboard',{username:req.session.user.username})
        }
        else{
          res.render('home-guest',{errors:req.flash('errors'),regErrors:req.flash('regErrors')})
        }
}