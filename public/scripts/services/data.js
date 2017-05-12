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

    this.getFoodItems = function () {
        $http.get("localhost:5000/api/foodItems/");
    };

    this.getRecipesForCategory = function (category, callback) {
        $http.get(`http://localhost:5000/api/recipes?category=${category.name}`)
        .then(callback);
    };

    this.getRecipe = function (id) {
        $http.get(`localhost:5000/api/recipes/${id}`);
    };


    this.updateRecipe = function (id) {
        $http.put(`localhost:5000/api/recipes/${id}`);
    };

    this.addRecipe = function () {
        $http.post("localhost:5000/api/recipes/");
    };

    this.deleteRecipe = function (id) {
        $http.delete(`localhost:5000/api/recipes/${id}`);
    };
});
