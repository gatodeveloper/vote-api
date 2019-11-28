const jwt = require('jsonwebtoken')
const Users = require('../models/users.model')
const config = require('../../../../config');

const auth = async(req, res, next) => {
	const authorization = req.header('Authorization');
	console.log(authorization);
	if(!authorization) return res.status(400).send();
    const token = authorization.replace('Bearer ', '')
    const data = jwt.verify(token, config.JWT_KEY)
    try {
        const user = await Users.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = auth