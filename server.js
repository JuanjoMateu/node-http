const http = require(`node:http`)

const server = http.createServer((req, res) => {
    console.log('Respuesta recibida')
    res.end()
})

server.listen(0, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`);
});