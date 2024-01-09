const http = require("node:http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    console.log("Path: " + req.url);

    let fileName = "." + req.url;
    fs.readFile(fileName, (error, data) => {

        if(error){

            fs.readFile("./404.html", (error, data) => {

                if(error){

                    res.writeHead(404, {"Content-Type": "text/plain"});
                    res.write("404 - Not Found");

                    return res.end();
                }

                res.writeHead(404, {"Content-Type": "text/html"});
                res.write(data);

                return res.end();
            });
        
        } else {

            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);

            return res.end();
        }
    });

});

const hostName = "127.0.0.1";
const port = 8080;

server.listen(port, hostName, () => {
    console.log("\nServer Active...\nhttp://" + hostName + ":" + port + "\n");
})