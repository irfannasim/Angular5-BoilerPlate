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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var requests_service_1 = require("../services/requests.service");
var user_shared_service_1 = require("../services/user.shared.service");
var his_util_service_1 = require("../services/his-util.service");
var permissions_service_1 = require("../services/permissions.service");
var LoginComponent = (function () {
    function LoginComponent(requestsService, router, sharedService, HISUtilService, permissionService) {
        this.requestsService = requestsService;
        this.router = router;
        this.sharedService = sharedService;
        this.HISUtilService = HISUtilService;
        this.permissionService = permissionService;
    }
    ;
    LoginComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem(btoa('access_token'))) {
            this.router.navigate(['dashboard']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        if (form.valid) {
            this.requestsService.postRequestOauth2Token('/oauth/token', {
                'userName': this.username,
                'password': this.password,
                'grantType': 'password',
            })
                .subscribe(function (response) {
                //console.log(response);
                if (response['token_type'] === 'bearer') {
                    window.localStorage.setItem(btoa('access_token'), btoa(response['access_token']));
                    window.localStorage.setItem(btoa('refresh_token'), btoa(response['refresh_token']));
                    window.localStorage.setItem(btoa('expire_in'), btoa(response['expires_in']));
                    _this.requestsService.postRequest('/user/auth/signIn', {
                        'userName': _this.username,
                        'password': _this.password,
                    })
                        .subscribe(function (response) {
                        if (response['responseCode'] === 'ADM_AUTH_SUC_01') {
                            _this.sharedService.firstName = response['responseData'].firstName;
                            _this.sharedService.lastName = response['responseData'].lastName;
                            _this.sharedService.profileImg = response['responseData'].profileImg;
                            _this.sharedService.roles = response['responseData'].commaSeparatedRoles;
                            _this.permissionService.loadPermissions(response['responseData'].permissions);
                            // super admin Dashboard
                            _this.router.navigate(['/dashboard']);
                        }
                        else {
                            _this.router.navigate(['/login']);
                            window.localStorage.removeItem(atob('access_token'));
                            window.localStorage.removeItem(atob('refresh_token'));
                            window.localStorage.removeItem(atob('expire_in'));
                            window.localStorage.removeItem(atob('permissions'));
                            _this.error = response['responseMessage'];
                        }
                    }, function (error) {
                        //console.log(error.json());
                        _this.error = error.error.error_description;
                        _this.HISUtilService.tokenExpired(error.error);
                    });
                }
                else {
                    _this.error = response['responseMessage'];
                    window.localStorage.removeItem(atob('access_token'));
                    window.localStorage.removeItem(atob('refresh_token'));
                    window.localStorage.removeItem(atob('expire_in'));
                    window.localStorage.removeItem(atob('permissions'));
                }
            }, function (error) {
                //console.log(error);
                _this.error = error.error.error_description;
                _this.HISUtilService.tokenExpired(error.error);
            });
        }
        else {
            this.error = 'Fields are required.';
        }
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.router.navigate(['/forgotPassword']);
    };
    LoginComponent.prototype.hideErrorMessage = function () {
        this.error = null;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-component',
            templateUrl: '../templates/login.template.html',
        }),
        __metadata("design:paramtypes", [requests_service_1.RequestsService,
            router_1.Router,
            user_shared_service_1.UserSharedService,
            his_util_service_1.HISUtilService,
            permissions_service_1.PermissionsService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map