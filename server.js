const express = require("express")
const recurso = require('./router/rutas')

const app=  express()
const PORT=8080


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api',recurso)

const server = app.listen(PORT,()=>{
    console.log(`servidor http escuchando ${server.address().port}`)
});

app.use('/static',express.static(__dirname+'/public'))

server.on("error",error =>console.log(`error e el servidor ${error}`));




