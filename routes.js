const express = require('express');
const routes = express.Router();
const recipes = require("./data");

routes.get("/", function(req, res) {
    return res.render('Landing', { recipes });
});

routes.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = recipes[recipeIndex];
    return res.render('Recipe' , { recipe });
});

routes.get("/about", function(req, res) {
    return res.render('About');
});

routes.get("/recipes", function(req, res) {
    return res.render('Recipes', { recipes });
});

module.exports = routes;