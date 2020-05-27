"use strict"

const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {

    res.status(200).send("[SERVIDOR DE REFRESH TOKEN] - INICIADO E PRONTO PARA TRABALHAR... :)")

});


module.exports = router;