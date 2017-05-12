"use strict";

angular.module("app")

.controller("RecipeDetailController", function ($location, $scope, dataService) {

    /**
    * Initialize Data
    */

    const recipeId = $location.url().split("/")[2];
    if (recipeId !== undefined) {
        dataService.getRecipe(recipeId, function (response) {
            $scope.recipe = response.data;
        });
    }

    dataService.getCategories(function (response) {
        $scope.categories = response.data;
    });

    dataService.getFoodItems(function (response) {
        $scope.foodItems = response.data;
    });

    /**
    * Functions
    */

    $scope.changeLocation = function (path) {
        $location.path("/" + path);
    };

    $scope.addIngredient = function () {
        if ($scope.recipe === undefined) {
            $scope.recipe = {};
        }
        if ($scope.recipe.ingredients === undefined) {
            $scope.recipe.ingredients = [{}];
        } else {
            $scope.recipe.ingredients.push({});
        }
    }

    $scope.deleteIngredient = function (ingredient) {
        const index = $scope.recipe.ingredients.indexOf(ingredient);
        $scope.recipe.ingredients.splice(index, 1);
    }

    $scope.addStep = function () {
        if ($scope.recipe === undefined) {
            $scope.recipe = {};
        }
        if ($scope.recipe.steps === undefined) {
            $scope.recipe.steps = [{}];
        } else {
            $scope.recipe.steps.push({});
        }
    }

    $scope.deleteStep = function (step) {
        const index = $scope.recipe.steps.indexOf(step);
        $scope.recipe.steps.splice(index, 1);
    }

    $scope.addRecipe = function (recipe) {
        if (recipe._id) {
            dataService.updateRecipe(recipe);
        } else {
            dataService.addRecipe(recipe);
        }
        $location.path("/");
    }

});
