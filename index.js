const express = require("express")
const http = require("http")
const axios = require("axios")

const server = http.createServer(express)

const port = process.env.PORT || 6000

//const linkServidorExterno = "http://localhost:5000" //https://sisimlserver.herokuapp.com/
const linkServidorExterno = "https://sisimlserver.herokuapp.com/"
const time = 3600000 // 1 Hora

setInterval(async ()=> {
    await axios.get(`${linkServidorExterno}/atualizador_refresh_token`).then(response => {
        console.log("\n")
        console.log("Data e hora: "+new Date())
        console.log(response.data)
        console.log("\n")
    }).catch(err => console.log(err))
}, time)

server.listen(port, () => {
    console.log("\n")
    console.log(`Servidor de agendamento rodando na porta ${port}`)
    console.log("\n")
})
