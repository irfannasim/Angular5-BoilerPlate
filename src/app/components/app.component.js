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
var notification_service_1 = require("../services/notification.service");
var material_1 = require("@angular/material");
var AppComponent = (function () {
    function AppComponent(notificationservice, snackbar) {
        this.notificationservice = notificationservice;
        this.snackbar = snackbar;
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.subsciption.unsubscribe();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subsciption = this.notificationservice.toastsubject.subscribe(function (message) {
            _this.makeToast(message); /*
        this.snackbar.open(message,'done',{
            duration: 2000,
            extraClasses:['root']
        });*/
        });
    };
    AppComponent.prototype.makeToast = function (msg) {
        var config = new material_1.MatSnackBarConfig();
        config.duration = 4000;
        config.horizontalPosition = 'start',
            config.panelClass = ['success-snackbar'];
        this.snackbar.open(msg, 'Close', config);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-component',
            templateUrl: '../templates/app.template.html',
            styleUrls: ['../styles/app.style.css']
        }),
        __metadata("design:paramtypes", [notification_service_1.NotificationService, material_1.MatSnackBar])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map