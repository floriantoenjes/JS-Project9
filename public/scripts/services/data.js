"use strict";

angular.module("app")

.service("dataService", function ($http) {

    this.getRecipes = function (callback) {
        $http.get("http://localhost:5000/api/recipes/")
        .then(callback);
    };

    this.getCategories = function (callback) {
        $http.get("http://localhost:5000/api/categories")
        .then(callback);
    };

    this.getFoodItems = function (callback) {
        $http.get("http://localhost:5000/api/foodItems/")
        .then(callback);
    };

    this.getRecipesForCategory = function (category, callback) {
        $http.get(`http://localhost:5000/api/recipes?category=${category.name}`)
        .then(callback);
    };

    this.getRecipe = function (id, callback) {
        $http.get(`http://localhost:5000/api/recipes/${id}`)
        .then(callback);
    };


    this.updateRecipe = function (id) {
        $http.put(`http://localhost:5000/api/recipes/${id}`);
    };

    this.addRecipe = function (recipe) {
        $http.post("http://localhost:5000/api/recipes/", recipe);
//        console.log(recipe)
    };

    this.deleteRecipe = function (id) {
        $http.delete(`http://localhost:5000/api/recipes/${id}`);
    };
});
