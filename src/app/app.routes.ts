import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/dashboard/main.component";
import {LoginComponent} from "./components/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DashboardRoutes} from "./routes/dashboard.routes";


const AppRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'index', component: MainComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, children: DashboardRoutes},
];

export const routes = RouterModule.forRoot(AppRoutes);
