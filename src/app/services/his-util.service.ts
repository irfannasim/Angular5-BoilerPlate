import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Injectable()
export class HISUtilService {
    constructor(private router: Router) {
    };

    tokenExpired(response: string) { 
        if (response === 'invalid_token') {
            window.localStorage.removeItem(btoa('access_token'));
            window.localStorage.removeItem(btoa('refresh_token'));
            window.localStorage.removeItem(btoa('expire_in'));
            window.localStorage.removeItem(atob('permissions'));

            this.router.navigate(['/login']);
        }
    }

    hidePopupWithCloseButtonId(closeButtonId: string){
        document.getElementById(closeButtonId).click();
    }

}
