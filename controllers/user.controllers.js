
const {response} =  require('express')

const userGet = (req, res = response) => {

    const {q, nombre = "no name", apikey, page=1, limit} = req.query;

    res.json({
        mssg: 'get API - controller',
        q,
        nombre,
        apikey,
        page, 
        limit
    })
}

const userPost = (req, res) => {

    const {nombre, edad, id, apellido} = req.body;

    res.status(201).json({
        mssg: 'post API',
        nombre,
        apellido,
        id,
        edad
    })
}

const userPut = (req, res) => {

    const {id} = req.params;

    res.status(400).json({
        mssg: 'put API',
        id
    })
}

const userPatch = (req, res) => {
    res.json({
        mssg: 'patch API'
    })
}

const userDelete = (req, res) => {
    res.json({
        mssg: 'delete API'
    })
}

module.exports = {
    userGet, userPut,
    userPost, userDelete,
    userPatch
}
