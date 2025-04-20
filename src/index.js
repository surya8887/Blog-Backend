import env from 'dotenv'

import exprsss from 'express'
const app = exprsss()
const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    return res.send("<h1> Hello world </h1>")
})


app.listen(port,()=>{
    console.log(`Server is Listen at http://localhost:${port}`);
})
