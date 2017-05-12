"use strict";

! function () {

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
            addItem("ingredients");
        }

        $scope.deleteIngredient = function (ingredient) {
            deleteItem("ingredients", ingredient);
        }

        $scope.addStep = function () {
            addItem("steps");
        }

        $scope.deleteStep = function (step) {
            deleteItem("steps", step);
        }

        function addItem(name) {
            if ($scope.recipe === undefined) {
                $scope.recipe = {};
            }
            if ($scope.recipe[name] === undefined) {
                $scope.recipe[name] = [{}];
            } else {
                $scope.recipe[name].push({});
            }
        }

        function deleteItem(name, element) {
            const index = $scope.recipe[name].indexOf(element);
            $scope.recipe[name].splice(index, 1);
        }


        $scope.addRecipe = function (recipe) {
            if (recipe && recipe._id) {
                dataService.updateRecipe(recipe, function (response) {
                    $location.path("/");
                }, errorHandler);
            } else {
                dataService.addRecipe(recipe, function (response) {
                    $location.path("/");
                }, errorHandler);
            }
        };

        function errorHandler(reason) {
            $scope.errors = [];
            for (let error in reason.data.errors) {
                $scope.errors.push(reason.data.errors[error][0].userMessage);
            }
        }

    });
}();
