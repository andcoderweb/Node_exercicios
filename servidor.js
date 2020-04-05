const http=require('http')
http.createServer((req,res)=>{

    res.write("Welcome")
    res.end()
}) .listen(8080)