import http from 'http';

const PORT = 3000;
const server = http.createServer((req,res)=>{
    // console.log(req)
// res.end("<h1>Server is running on port 3000</h1>");

if(req.url === "/"){
    res.end("<h1>Server is running on port 3000</h1>");
}
else if (req.url === "/about"){
    res.end("<h1>About Page</h1>");
}
else if (req.url === "/contact"){
    res.end("<h1>Contact Page</h1>");
}
else{
    res.end("<h1>404 Page</h1>");
}
})

server.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))