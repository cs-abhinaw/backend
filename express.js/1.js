/* 
route is a function that takes a request and response object and returns a response.
It is used to handle HTTP requests and responses in a web application.
It is a part of the Express framework, which is a web application framework for Node.js.
 middleware is a function that takes  data from the 
 user and adds it to the request object.
It is used to process data before it is sent to the server.
It is a part of the Express framework, which is a web application framework for Node.js.
// It is used to handle HTTP requests and responses in a web application.


*/
/* const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/about', (req, res) => {
  res.send('About Page!');
})

// app.get('profile', (req, res) => {
//     return UNSAFE_NavigationContext(new Error('Profile Page!'));
// }) //backend  error handling middleware
app.use((req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}) //frntend error handling middleware
app.listen(3000) */