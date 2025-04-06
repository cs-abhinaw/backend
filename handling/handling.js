/* form handling and working with the forms 
handling backend process of forms and making sure that 
data comming from any frontend lib,fw templet engine

*  to get rid of login again and again we use session
it gives  a unique id with name so that it can be easy to use
is session 
cookie:whenver we request somtg it come with 'reques+string' is 
on saved on frontend is called cookie

session->when we connected to server based on cookie is session.

me->server(with cookie) =>session 

*/
const express =require ('express')
const app=express();

//midddleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.send("champian bro");
});
app.get ("/profile",function(req,res){
    res.send("profile page h dost");
});
app.get ("/about",function(req,res){
    return next(new Error("not implemented"));
});
app.listen(2000)

