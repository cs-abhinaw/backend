/* node.js Basic
introduction to node,js
installing node.js and npm
working with module
file system operation
understanding http module
*/

/* node js is developed by rayan dayl jo ki v8 engine use kiya 
jo c++ me likha gya hai to jo bhi ham code likhte hai 
wo indirectly c++ k engine pe chalta par acctually js
me likhte hai jo v8 engine server creaete karta h

v8->js->nodejs incresing order
node js is a js run environment
*/


/* 
npm -> about the project
how to use??
cjs->common js we use "require" file
esm->we treate file as a module
fs.write(file,data[,option],callback)

the below code fs require the fs name
fs.writeFile will firstly take the input of file name
then msg then if you want to show is file created or not
*/
/*  const fs = require('fs');
fs.writeFile("hey.txt","console.log('hello');",function(err){
    if(err) console.error(err);
    else console.log("done");
    
})*/

    //file rename
   /*  const fs = require('fs')
    fs.rename("hey.txt","hello.txt",function (err){
        if(err) console.error(err)
        else console.log("created");
        
    }) */

    // file copy    
    /* const fs= require("fs")
    fs.copyFile("hello.txt","./copy/chacha.txt",
        function(err){
            if(err) console.error(err);
            else console.log("copied success")
            
        }
    ) 
        this shows an error*/

    // to remove an file some error by me 

// const fs = require ('fs');

//     fs.unlink("hello.txt",function(err){
//         if(err) console.err(err)
//             else console.log("deleted")
//     })

// to create a server


const http = require('http');

const server = http.createServer(function(req,res){
    res.end("hello gi hi");
})

server.listen(3000)
