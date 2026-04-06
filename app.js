const http = require("http");

const server = http.createServer((req, res) => {
    res.write("res.write("CI/CD FINAL WORKING 🎉");");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});