// rotas terminadas em /users
// ----------------------------------------------------
apiRouter.route('/users')
  // criar usuário (POST http://localhost:8040/api/users)
  .post(function (req, res) {
    // criar uma nova instância do Usuário
    var user = new User()
    // informações do usuário (na request)
    user.name = req.body.name
    user.username = req.body.username
    user.password = req.body.password
    // salvar e verificar erros
    user.save(function (err) {
      if (err) {
        // usuário duplicado
        if (err.code === 11000) {
          return res.json({
            success: false,
            message: 'Um usuário com esse username já existe.'
          })
        } else {
          return res.send(err)
        }
      }
      res.json({ message: 'Usuário criado!' })
    })
  })