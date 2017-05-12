"use strict";

angular.module("app")

.service("dataService", function ($http) {

    this.getRecipes = function () {
        $http.get("localhost:5000/api/recipes/");
    };

    this.getCategories = function () {
        $http.get("localhost:5000/api/categories");
    };

    this.getFoodItems = function () {
        $http.get("localhost:5000/api/foodItems/");
    };

    this.getRecipesForCategory = function (category) {
        $http.get(`localhost:5000/api/recipes?category=${category}`)
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
