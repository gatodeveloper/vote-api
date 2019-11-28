///var usersServices = require('../services/users.service');
const Users = require('../models/users.model');

var exports = module.exports;

exports.create = async (req, res) => {
    try {
        const user = new Users(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }}


exports.login = async(req, res) => {
    try {
        const { email, password } = req.body
        const user = await Users.findByCredentials(email, password)
        if (!user) {
          return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }

}


exports.logout =  async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
          return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
}