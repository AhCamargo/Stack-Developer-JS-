// importe os módulos HTTP e FileSystem
const http = require('http'), fs = require('fs')


// agora crie o Server HTTP
http.createServer((req, res) => {
    // Esse é header da resposta do server, quando estiver all right
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    })
    // Vamos read the archive index.html
    let readStream = fs.createReadStream(__dirname + '/index.html')

    // Let's send para o cliente
    readStream.pipe(res)
}).listen(1991)

// Dizemos para escutar na porta 1991.
// e informamos o endpoint 
console.log('Entra nessa parada mermao, http://localhost:1991  ou http://127.0.0.1:1991  xD')