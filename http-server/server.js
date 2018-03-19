// Next the pass, carregar o Express e criar um APP
const express = require('express')
const app = express()
const path = require('path')

// vamos criar uma rota para '/',
// quando digitar o ip da aplicacao ele redireciona para o index.html,
// sem ter a necessidade de por assim : http://localhost:2018/index.html

app.get('/', (req, res) => {
    // send for client an index.html
    res.sendFile(path.join(__dirname + '/index.html'))
})

// chamando o Router
var adminRouter = express.Router()

//criando rotas p/ o admin

adminRouter.get('/', (req, res) => {
    res.send('Hello, The World is mine!!')
})

//pagina de usuarios
adminRouter.get('/users', (req, res) => {
    res.send('Lista de Usuarios')
})

//posts
adminRouter.get('/posts', (req, res) => {
    res.send('Aqui está o seu post!')
})

app.use('/admin', adminRouter)

//agora mudamos de porta para 2017
// Para fins de estudo, utilize portas diferentes dos padroes ex.: 80, 8080, 443, 5060..
// inicia o servico ae man!!
app.listen(2018)
console.log('Service is running in the port 2018 :) ')



