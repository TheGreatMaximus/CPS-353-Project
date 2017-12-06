"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.createUser = function (user) {
        this.http.post('http://localhost:5000/api/user/', user);
    };
    UserService.prototype.findUserById = function (userId) {
        console.log("user.id" + userId);
        return this.http.get('http://localhost:5000/api/user/' + userId).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get('http://localhost:5000/api/user/GetUserByUsername?username=' + username).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = "http://localhost:5000/api/user/GetByCredentials?username="
            + username + "&password=" + password;
        console.log(url);
        return this.http.get(url).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    UserService.prototype.googleapi = function (discription) {
        return this.http.get('http://localhost:5000/api/user/googleplaces?discription=' + discription).map(function (res) {
            console.log(res.json());
            // let data = res.json();
            // let returnvalue = JSON.parse(data);
            // return returnvalue;
            return res.json();
        }).catch(this.handleError);
        // console.log(discription)
        // return this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='
        // +discription+
        // '&types=establishment&location=42.5894,-70.8209&radius=500&key=AIzaSyA-VEcPYKRjPUSedxY_YBjaLOGEhoBstyU').map((res: Response) =>{ return res.json()
        // }).catch(this.handleError);
    };
    // add a static counter
    UserService.prototype.maxid = function () {
        var temp = 0;
        var counter = 0;
        var max = 300;
        return max + 1;
    };
    UserService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.statusText);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map