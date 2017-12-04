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
var platform_browser_1 = require("@angular/platform-browser");
var navbar_component_1 = require("./nav/navbar.component");
var website_service_1 = require("./services/website.service");
var websites_app_component_1 = require("./websites-app.component");
var user_service_1 = require("./services/user.service");
var profile_component_1 = require("./components/user/profile.component");
var login_component_1 = require("./components/user/login.component");
var register_component_1 = require("./components/user/register.component");
var router_1 = require("@angular/router");
var routes_1 = require("./routes");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var destination_component_1 = require("./components/user/destination.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes_1.appRoutes), forms_1.FormsModule],
        declarations: [websites_app_component_1.WebsitesAppComponent, navbar_component_1.NavbarComponent, login_component_1.LoginComponent, destination_component_1.destinationComponent,
            register_component_1.RegisterComponent, profile_component_1.ProfileComponent],
        providers: [website_service_1.WebsiteService, user_service_1.UserService],
        bootstrap: [websites_app_component_1.WebsitesAppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map