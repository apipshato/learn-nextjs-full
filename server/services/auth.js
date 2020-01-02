const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace ='http://localhost:3000/';
//middlewarejwt

exports.checkJWT = jwt({
secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15, // Default value
    jwksUri: 'https://dev-4ib9zyqm.auth0.com/.well-known/jwks.json',
}),
audience: '0mxpR9HMqD3sPZ16HzUbe4e1S5HF187g',
issuer: 'https://dev-4ib9zyqm.auth0.com/',
algorithms:['RS256'] 
})

exports.checkRole = role => (req, res, next) => {
    const user = req.user;
  
    if (user && (user[namespace + '/role'] === role)) {
      next();
    } else {
      return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data'})
    }
  }
  