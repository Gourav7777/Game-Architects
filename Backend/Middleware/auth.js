const jwt = require("jsonwebtoken")


const auth=(req,res,next)=>{

    let token = req.headers.authorization

    if(token){

     token = token.split(" ")[1]
     
     const decoded= jwt.verify(token,"batman")
     console.log(decoded)
       if(decoded){
          req.body.UserID = decoded.userID
          console.log(req.body)
          next()
       }
       else{
        res.status(400).send({"msg":"can't verify token"})
       }

    }
else{
    res.status(400).send({"msg":"token not found can't proceed"})
}
}


module.exports={auth}