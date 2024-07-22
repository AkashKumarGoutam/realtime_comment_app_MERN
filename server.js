//  import express js
const express = require("express")
// calling express to use them 
const app = express()

//   and then after create PORT 

// step 1:- we can check port env are available or not now other then start port no 3000
const port = process.env.PORT || 3000
//  step 2 : - set the port 
app.listen(port , ()=>{
    console.log(`Listinning is port ${port}`)
})
app.use(express.static('public'))


