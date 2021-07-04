
const logger = require('../middleware/logger.js');

module.exports = function(err, req, res, next){
    logger.error(err);
    res.status(500).send("Something failed, please try again.")
}