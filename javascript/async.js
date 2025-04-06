/* synchronous code is line by line code running  
asynchronous code:- that code is asyn code send to side stacl 
code and run next code that is sync nature run all 
that code so that main stack is empty then check
the asyn code is complete or not not is not 
commplte then it 
comes in main stack and run it*/

async function abcd(){
  var blob=  await fetch(`https://randomuser.me/api/`)
  var ans=blob.json();
  console.log(ans.result[0]);
  
}
abcd();