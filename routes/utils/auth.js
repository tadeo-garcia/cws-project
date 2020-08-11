const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../../config').jwtConfig;

exports.getUserToken = async (user) => {
  return await jwt.sign(
    { id: user.id, userName: user.userName },
    secret,
    { expiresIn } // expressed in seconds
  );
     
 
};

