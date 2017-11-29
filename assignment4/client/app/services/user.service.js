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
        USERS.push(user);
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
    UserService.prototype.updateUser = function (userId, user) {
        USERS[userId] = user;
    };
    UserService.prototype.deleteUser = function (userId) {
        delete USERS[userId];
    };
    UserService.prototype.maxid = function () {
        var temp = 0;
        var counter = 0;
        var max = USERS.length;
        while (counter < max) {
            if (temp < USERS[counter].id) {
                console.log(USERS[counter].id);
                console.log(USERS[counter].userName);
                temp = USERS[counter].id;
                console.log(temp);
            }
            counter = counter + 1;
        }
        return temp + 1;
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
var USERS = [
    { id: 123, userName: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    { id: 234, userName: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    { id: 345, userName: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    { id: 456, userName: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
];
//# sourceMappingURL=user.service.js.map