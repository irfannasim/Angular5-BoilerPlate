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
require("rxjs/Rx");
var router_1 = require("@angular/router");
var app_config_1 = require("../configuration/app.config");
var http_1 = require("@angular/common/http");
var RequestsService = (function () {
    function RequestsService(http, router, appConfig) {
        this.http = http;
        this.router = router;
        this.appConfig = appConfig;
    }
    ;
    RequestsService.prototype.getToken = function () {
        return window.localStorage.getItem(btoa('access_token'));
    };
    RequestsService.prototype.getBEAPIServer = function () {
        var protocol = app_config_1.AppConfig.BE_HTTP_PROTOCOL; // http
        var server = app_config_1.AppConfig.BE_API_ENDPOINT; // 192.168.1.188
        var port = app_config_1.AppConfig.BE_API_PORT;
        var contextPath = '/' + app_config_1.AppConfig.BE_API_CONTEXT_PATH;
        if (protocol === '' || !protocol || server === '' || !server)
            return '';
        else {
            if (port === '' || !port) {
                return protocol + app_config_1.AppConfig.BE_HTTP_SEPARATOR + server + ':' + port + contextPath;
            }
            else {
                return protocol + app_config_1.AppConfig.BE_HTTP_SEPARATOR + server + ':' + port + contextPath;
            }
        }
    };
    RequestsService.prototype.postRequestOauth2Token = function (url, _params) {
        var reqHeader = new http_1.HttpHeaders({ 'Authorization': 'Basic ' + btoa(app_config_1.AppConfig.BE_ACCESS_CLIENT + ':' + app_config_1.AppConfig.BE_ACCESS_SECRET) });
        var URI = this.getBEAPIServer() + url + '?username=' + _params['userName'] + '&password=' + _params['password'] + '&grant_type=' + _params['grantType'];
        return this.http.post(URI, _params, { headers: reqHeader });
    };
    RequestsService.prototype.getRequest = function (url) {
        var reqHeader = new http_1.HttpHeaders({ 'Authorization': 'Bearer ' + atob(this.getToken()) });
        reqHeader.append('Content-Type', 'application/json');
        return this.http.get(this.getBEAPIServer() + url, { headers: reqHeader });
    };
    RequestsService.prototype.postRequest = function (url, _params) {
        var reqHeader = new http_1.HttpHeaders({ 'Authorization': 'Bearer ' + atob(this.getToken()) });
        reqHeader.append('Content-Type', 'application/json');
        return this.http.post(this.getBEAPIServer() + url, _params, { headers: reqHeader });
    };
    RequestsService.prototype.deleteRequest = function (url) {
        var reqHeader = new http_1.HttpHeaders({ 'Authorization': 'Bearer ' + atob(this.getToken()) });
        reqHeader.append('Content-Type', 'application/json');
        return this.http.delete(this.getBEAPIServer() + url, { headers: reqHeader });
    };
    RequestsService.prototype.findById = function (url) {
        var reqHeader = new http_1.HttpHeaders({ 'Authorization': 'Bearer ' + atob(this.getToken()) });
        reqHeader.append('Content-Type', 'application/json');
        return this.http.get(this.getBEAPIServer() + url, { headers: reqHeader })
            .map(function (data) {
            return data.responseData;
        });
        ;
        //.catch((error:any) => Observable.throw(error.json().error || 'Error'));
    };
    RequestsService.prototype.putRequest = function (url, _params) {
        var reqHeader = new http_1.HttpHeaders({ 'Authorization': 'Bearer ' + atob(this.getToken()) });
        reqHeader.append('Content-Type', 'application/json');
        return this.http.put(this.getBEAPIServer() + url, _params, { headers: reqHeader });
    };
    RequestsService.prototype.getRequestWithParam = function (url, param) {
        var reqHeader = new http_1.HttpHeaders({ 'Authorization': 'Bearer ' + atob(this.getToken()) });
        reqHeader.append('Content-Type', 'application/json');
        var params = new http_1.HttpParams().set('name', param);
        return this.http.get(this.getBEAPIServer() + url, { headers: reqHeader, params: params });
    };
    RequestsService.prototype.postRequestMultipartFormData = function (url, data) {
        var reqHeader = new http_1.HttpHeaders({ 'Authorization': 'Bearer ' + atob(this.getToken()) });
        var formData = new FormData();
        formData.append('file', data, data.name);
        return this.http.post(this.getBEAPIServer() + url, formData, { headers: reqHeader });
    };
    RequestsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router,
            app_config_1.AppConfig])
    ], RequestsService);
    return RequestsService;
}());
exports.RequestsService = RequestsService;
//# sourceMappingURL=requests.service.js.map