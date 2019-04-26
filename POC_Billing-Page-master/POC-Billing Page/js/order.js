var app = angular.module('myApp', []);
app.controller('myController',
    function ($scope, $http) {

        var request = {
            method: 'get',
            url: 'https://www.encodedna.com/angularjs/tutorial/birds.json',
            dataType: 'json',
            contentType: "application/json"
        };

        $scope.arrBirds = new Array;

        $http(request)
            .success(function (jsonData) {
                $scope.arrBirds = jsonData;
                $scope.list = $scope.arrBirds;
            })
            .error(function () {

            });
    });