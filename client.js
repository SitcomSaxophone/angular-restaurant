console.log('js');


let foodApp = angular.module('FoodApp', []);

foodApp.controller('FoodController', function () {
    let self = this;

    self.message = 'Hello';
    self.foods = [
        {

        }
    ]
})