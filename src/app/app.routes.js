"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var main_component_1 = require("./components/dashboard/main.component");
var login_component_1 = require("./components/login.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var dashboard_routes_1 = require("./routes/dashboard.routes");
var AppRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'index', component: main_component_1.MainComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, children: dashboard_routes_1.DashboardRoutes },
];
exports.routes = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.routes.js.map