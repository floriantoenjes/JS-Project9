"use strict";

! function () {

    angular.module("app")

    .service("dataService", function ($http) {

    /**
     * GET
     */

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

    /**
     * POST
     */

        this.addRecipe = function (recipe, callback, errorCallback) {
            $http.post("http://localhost:5000/api/recipes/", recipe)
            .then(callback, errorCallback);
        };

    /**
     * PUT
     */

        this.updateRecipe = function (recipe, callback, errorCallback) {
            $http.put(`http://localhost:5000/api/recipes/${recipe._id}`, recipe)
            .then(callback, errorCallback);
        };

    /**
     * DELETE
     */

        this.deleteRecipe = function (id) {
            $http.delete(`http://localhost:5000/api/recipes/${id}`);
        };

    });
}();
