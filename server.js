const express = require('express');
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("pages", {
    express: server
})

server.get("/", function(req, res) {
    return res.render('Landing')
})

server.get("/about", function(req, res) {
    return res.render('About')
})

server.get("/recipes", function(req, res) {
    return res.render('Recipes')
})

server.listen("5000", function(){
    console.log("server is running")
 })