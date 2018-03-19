// Next the pass, carregar o Express e criar um APP
const express = require('express')
const app = express()
const path = require('path')

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_meanjs')

// vamos criar uma rota para '/',
// quando digitar o ip da aplicacao ele redireciona para o index.html,
// sem ter a necessidade de por assim : http://localhost:2018/index.html

app.get('/', (req, res) => {
    // send for client an index.html
    res.sendFile(path.join(__dirname + '/index.html'))
})

// chamando o Router
var adminRouter = express.Router()

//middleware de roteamento executado a cada requisiçao
adminRouter.use((req, res, next) => {
    console.log(req.method, res.url)
    next()
})

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

adminRouter.get('/users/:name', (req, res) => {
    res.send('Fala' + req.name + '!')
})

adminRouter.param('name', (req, res, next, name) => {
    console.log('validando o nome: ' + name)
    req.name = name
    next()
})

app.route('/login')
   .get((req, res) => {
       res.send('This us the login form')
   })
   .post((req, res) => {
       console.log('processing')
       res.send('processing the login form')
   })

//app.use('/', basicRoutes)
//app.use('/admin', adminRoutes)
//app.use('/api', apiRoutes)

//agora mudamos de porta para 2017
// Para fins de estudo, utilize portas diferentes dos padroes ex.: 80, 8080, 443, 5060..
// inicia o servico ae man!!
app.listen(2018)
console.log('Service is running in the port 2018 :) ')



