const http = require ('http')

const server = http.createServer (function (req, res){
  res.end('Ola, sou o PAULO OLIVEIRA MARTINS!')
})

const port = (process.env.PORT || 3000)
server.listen(port, function(){
  console.log(`Sevidor rodando em http://localhost:${port}`)
})
