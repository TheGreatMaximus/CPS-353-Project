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
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var destinationComponent = (function () {
    function destinationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.destinationlist = [];
    }
    destinationComponent.prototype.search = function (searchForm) {
        var _this = this;
        var i;
        console.log(searchForm.destination);
        this.userService.googleapi(searchForm.destination).subscribe(function (val) {
            _this.jsonstring = val;
            console.log(_this.jsonstring);
            for (i = 0; i < _this.jsonstring.predictions.length; i++) {
                _this.destinationlist[i] = _this.jsonstring.predictions[i].description;
            }
        });
    };
    destinationComponent.prototype.add = function (destinationForm) {
        console.log(destinationForm.destination);
        this.userService.addUserDestination(destinationForm.destination, this.user);
    };
    return destinationComponent;
}());
destinationComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/user/destination.component.html',
        styleUrls: ['app/components/user/userstyles.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], destinationComponent);
exports.destinationComponent = destinationComponent;
//# sourceMappingURL=destination.component.js.map