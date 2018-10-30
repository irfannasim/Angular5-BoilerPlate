import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

declare var toastr: any;

@Injectable()
export class NotificationService {

    public toastsubject: Subject<string> = new Subject();

    showduration: number = 5000;

    constructor() {
        this.settings();
    }

    public success(title: string, msg?: any) {
        toastr.success(title, msg);
    }

    public error(title: string, msg?: any) {
        toastr.error(title, msg);
    }

    public warn(title: string) {
        toastr.warning(title);
    }

    public clear() {
        toastr.clear();
    }

    public settings() {

        toastr.options = {
            'closeButton': true,
            'debug': false,
            'newestOnTop': true,
            'progressBar': true,
            'positionClass': 'toast-top-right',
            'preventDuplicates': false,
            'onclick': null,
            'showDuration': '500',
            'hideDuration': '1000',
            'timeOut': '5000',
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut'
        }
    }


}