import {Routes} from '@angular/router';
import {NotFound404Component} from '../components/errors/not-found-404.component';
import {ContentComponent} from '../components/dashboard/content.component';

export const DashboardRoutes: Routes = [
    // Dashboard Pages
    {path: '', component: ContentComponent},
    {path: '404-not-found', component: NotFound404Component},
    {path: '**', redirectTo: '404'}
];
