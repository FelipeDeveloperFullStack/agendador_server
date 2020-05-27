const express = require("express")
const http = require("http")
const axios = require("axios")
require("dotenv/config")

const server = http.createServer(express)

const port = process.env.PORT || 6000

setInterval(async ()=> {
    await axios.get(`https://sisimlserver.herokuapp.com/atualizador_refresh_token`).then(response => {
        console.log("\n")
        console.log(process.env.DATA_HORA+" "+new Date())
        console.log(response.data)
        console.log("\n")
    }).catch(err => console.log(err))
}, 3600000)

server.listen(port, () => {
    console.log("\n")
    console.log(`Servidor de agendamento rodando na porta ${port}`)
    console.log("\n")
})
