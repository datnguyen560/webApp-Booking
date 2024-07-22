const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) {
        return res.status(401).json({message:"Bạn chưa xác thực"})
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) {
            return res.status(401).json({message:"Token is not valid"})
        }
        req.user = user;
        
        next();
    })
};
const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id) {
            next();
        }else {
            return res.status(401).json({message:"Bạn ko phải user"})
        }
        
    })
};

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log(req.user)
        if(req.user.isAdmin){
            next();
        }else{
            return res.status(401).json({message:"bạn ko phải Admin"})
        }
    })
}

module.exports = verifyToken;
module.exports = verifyUser;
module.exports = verifyAdmin;