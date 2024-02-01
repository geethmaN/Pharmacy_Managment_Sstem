const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).json({msg: "No Token - Authorization Denied"})
    }

    
