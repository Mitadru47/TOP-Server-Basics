const http = require("node:http");

const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {

    let parsedURL = url.parse(req.url);
    console.log("Path: " + parsedURL.pathname + "\n");
    
    let fileName = "." + parsedURL.pathname;
    fs.readFile(fileName, (error, data) => {

        if (error) {
         
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }  

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);

        return res.end();
    })

    // res.statusCode = 200;

    // res.setHeader("Content-Type", "text/plain");
    // res.end("Welcome!");
});

const hostName = "127.0.0.1";
const port = 8080;

server.listen(port, hostName, () => {
    console.log("\nServer Active...\nhttp://" + hostName + ":" + port + "\n");
});