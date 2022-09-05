const express = require("express")
const app = express()
const appData={}

app.get("/all", function(req,res){
    res.send(appData)
})

app.post('/',function (req,res){
    res.send('Post received')
})
const data=[]
app.post('/addMovie',addMovie)

function addMovie(req,res){
    console.log(req.body)
    data.push(req.body)
}