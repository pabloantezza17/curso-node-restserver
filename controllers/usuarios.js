const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const {q, nombre = 'no name', apikey, page = 1, limit} = req.query;

    res.json({
        msg: "Get API - Controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: "Put API - Controlador",
        id
    });
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: "Post API - Controlador",
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete API - Controlador"
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}