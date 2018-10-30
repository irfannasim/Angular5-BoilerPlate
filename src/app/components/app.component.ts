import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationService} from '../services/notification.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-component',
    templateUrl: '../templates/app.template.html',
    styleUrls: ['../styles/app.style.css']
})
export class AppComponent implements OnInit, OnDestroy {
    private subsciption: Subscription;

    constructor(private notificationservice: NotificationService,
                private snackbar: MatSnackBar) {
    }

    ngOnDestroy(): void {
        this.subsciption.unsubscribe();
    }

    ngOnInit(): void {
        this.subsciption = this.notificationservice.toastsubject.subscribe(message => {
            this.makeToast(message);
        })
    }

    makeToast(msg: string) {
        let config = new MatSnackBarConfig();
        config.duration = 4000;
        config.horizontalPosition = 'start';
        config.panelClass = ['success-snackbar'];
        this.snackbar.open(msg, 'Close', config)
    }

}
