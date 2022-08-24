const {createServer} = require("http");
const {Server} = require("socket.io");
const {client} = require("socket.io-client");

describe("test emit", () => {
    let io, serverSocket, clientSocket;

    beforeAll((done) => {
        let httpServer = createServer();
        io = new Server(httpServer);
        httpServer.listen(() => {
            const port = httpServer.address().port;
            
        })
    })
})