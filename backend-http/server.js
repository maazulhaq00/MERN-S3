import http from 'http'

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>Welcome to 2309C1 Home</h1>")
        res.end()
    }
    else if(req.url == "/about"){
        res.setHeader("Content-Type", "text/plain")
        res.write("This 2309C1 About Us")
        res.end()
    }
    else if(req.url == "/contact"){
        res.setHeader("Content-Type", "text/plain")
        res.write("This 2309C1 Contact Us")
        res.end()
    }
    else {
        res.setHeader("Content-Type", "text/plain")
        res.statusCode = 404
        res.write("Page not found")
        res.end()
    }
})

server.listen(3001, ()=>{
    console.log("Server runing at port 3001...")
})

// http://localhost:3001/