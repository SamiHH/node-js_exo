// ------- Node Js exo  --------------

// task 1 :
// Write a program to print "HELLO WORLD" to the console
console.log('"HELLO WORLD"')


// task 2 :
// create a server  
// Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000

var http = require('http');

const PORT = process.env.PORT || 3000;

// Creating http Server
var httpServer = http.createServer(function(request, response){
    // Writing string data
    response.write("<h1>Hello Node!!!! \n</h1> ");
    response.end(' ok');
});
httpServer.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}...`);
});


// task 3 :
// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// Second, create a program that reads and console.log data from hello.txt

const fs = require('fs')

// - ceate & write in file 
fs.appendFile('welcome.txt', " Hellow Node ", (err)=> {
    if(err) throw err;
    console.log('File is created & write successfully.')
})

// - read & log file 
fs.readFile("hello.txt", 'utf8' , (err, contents)=> {
    if(err) throw err
    console.log(contents);
})
