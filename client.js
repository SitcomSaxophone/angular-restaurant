console.log('js');

let foodApp = angular.module('FoodApp', []);

foodApp.controller('FoodController', function () {
    let self = this;

    self.message = '';
    self.foods = ['steak', 'lobster', 'coq a vin', 'spam with plain white rice'];
    self.append = function () {
        self.foods.push(self.message);
    }
})