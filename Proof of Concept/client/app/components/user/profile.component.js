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
var ProfileComponent = (function () {
    function ProfileComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.route.snapshot.params['uid'])
        //this.user =
        this.userService.findUserById(+this.route.snapshot.params['uid']).subscribe(function (user) { _this.user = user; });
        //console.log(this.user.firstName)
        //console.log(this.user)
    };
    ProfileComponent.prototype.delete = function () {
        console.log(this.user);
        console.log(this.user.id);
        this.userService.deleteUser(this.userService.findUserById(this.user.id));
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/user/profile.component.html',
        styleUrls: ['app/components/user/userstyles.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map