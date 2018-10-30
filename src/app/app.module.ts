// Modules
import {NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// App Components
import {AppComponent} from './components/app.component';
import {MainComponent} from './components/dashboard/main.component';
import {LoginComponent} from './components/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
// Dashboard Components
import {HeaderComponent} from './components/dashboard/header.component';
import {FooterComponent} from './components/dashboard/footer.component';
import {ContentComponent} from './components/dashboard/content.component';
// Errors
import {NotFound404Component} from './components/errors/not-found-404.component';
// Routes
import {routes} from './app.routes';
// Services
import {RequestsService} from './services/requests.service';
import {HISUtilService} from './services/his-util.service';
import {PermissionsService} from './services/permissions.service';

import {AppConfig} from './configuration/app.config';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastOptions} from 'ng2-toastr';
import {CustomOption} from './configuration/CustomOption';
import {HttpClientModule} from '@angular/common/http';
import {UserSharedService} from './services/user.shared.service';
import {
    MatSnackBarModule
} from '@angular/material';
import {NotificationService} from './services/notification.service';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {CalendarModule} from 'angular-calendar';


@NgModule({
    providers: [
        // Services
        RequestsService,
        NotificationService,
        HISUtilService,
        AppConfig,
        PermissionsService,
        {provide: ToastOptions, useClass: CustomOption},
        UserSharedService
    ],
    imports: [
        // Modules
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routes,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSnackBarModule,
        NgbModalModule.forRoot(),
        CalendarModule.forRoot()
    ],
    declarations: [
        // App Components
        AppComponent,
        MainComponent,
        LoginComponent,
        DashboardComponent,

        // Dashboard Components
        HeaderComponent,
        FooterComponent,
        ContentComponent,
        NotFound404Component,
    ],
    bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
    ngOnInit() {
    }
}
