const express = require("express")
const http = require("http")
const axios = require("axios")

const server = http.createServer(express)

const port = process.env.PORT || 6000

const linkServidorExterno = "http://localhost:5000"

setInterval(async ()=> {
    await axios.get(`${linkServidorExterno}/atualizador_refresh_token`).then(response => {
        console.log(response.data)
    }).catch(err => console.log(err))
}, 5000)

server.listen(port, () => {
    console.log("\n")
    console.log(`Servidor de agendamento rodando na porta ${port}`)
    console.log("\n")
})
