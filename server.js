const express = require('express');
const nunjucks = require('nunjucks')
const recipes = require('./data')
const server = express()

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("pages", {
    express: server
})

server.get("/", function(req, res) {
    return res.render('Landing', { items: recipes })
})

server.get("/about", function(req, res) {
    return res.render('About')
})

server.get("/recipes", function(req, res) {
    return res.render('Recipes', { items: recipes })
})

server.listen("5000", function(){
    console.log("server is running")
})