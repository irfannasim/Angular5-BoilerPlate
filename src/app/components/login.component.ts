import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {RequestsService} from '../services/requests.service';
import {UserSharedService} from '../services/user.shared.service';
import {HISUtilService} from '../services/his-util.service';
import {PermissionsService} from '../services/permissions.service';

@Component({
    selector: 'login-component',
    templateUrl: '../templates/login.template.html',
})
export class LoginComponent {
    username: string;
    password: string;
    remember: boolean;
    error: string;

    constructor(private requestsService: RequestsService,
                private router: Router,
                private sharedService: UserSharedService,
                private HISUtilService: HISUtilService,
                private permissionService: PermissionsService) {
    };

    ngOnInit() {
       /* if (window.localStorage.getItem(btoa('access_token'))) {
            this.router.navigate(['dashboard']);
        } else {
            this.router.navigate(['/login']);
        }*/
    }

    login(form: NgForm) {
        /*if (form.valid) {
            this.requestsService.postRequestOauth2Token(
                '/oauth/token'
                , {
                    'userName': this.username,
                    'password': this.password,
                    'grantType': 'password',
                })
                .subscribe(
                    (response: Response) => {
                        //console.log(response);
                        if (response['token_type'] === 'bearer') {
                            window.localStorage.setItem(btoa('access_token'), btoa(response['access_token']));
                            window.localStorage.setItem(btoa('refresh_token'), btoa(response['refresh_token']));
                            window.localStorage.setItem(btoa('expire_in'), btoa(response['expires_in']));

                            this.requestsService.postRequest(
                                '/user/auth/signIn'
                                , {
                                    'userName': this.username,
                                    'password': this.password,
                                })
                                .subscribe(
                                    (response: Response) => {
                                        if (response['responseCode'] === 'ADM_AUTH_SUC_01') {
                                            this.sharedService.firstName = response['responseData'].firstName;
                                            this.sharedService.lastName = response['responseData'].lastName;
                                            this.sharedService.profileImg = response['responseData'].profileImg;
                                            this.sharedService.roles = response['responseData'].commaSeparatedRoles;
                                            this.permissionService.loadPermissions(response['responseData'].permissions);

                                            // super admin Dashboard
                                            this.router.navigate(['/dashboard']);
                                        } else {
                                            this.router.navigate(['/login']);
                                            window.localStorage.removeItem(atob('access_token'));
                                            window.localStorage.removeItem(atob('refresh_token'));
                                            window.localStorage.removeItem(atob('expire_in'));
                                            window.localStorage.removeItem(atob('permissions'));

                                            this.error = response['responseMessage'];
                                        }
                                    },
                                    (error: any) => {
                                        //console.log(error.json());
                                        this.error = error.error.error_description;
                                        this.HISUtilService.tokenExpired(error.error);

                                    });
                        } else {
                            this.error = response['responseMessage'];
                            window.localStorage.removeItem(atob('access_token'));
                            window.localStorage.removeItem(atob('refresh_token'));
                            window.localStorage.removeItem(atob('expire_in'));
                            window.localStorage.removeItem(atob('permissions'));

                        }
                    }, (error: any) => {
                        //console.log(error);
                        this.error = error.error.error_description;
                        this.HISUtilService.tokenExpired(error.error);
                    });
        } else {
            this.error = 'Fields are required.'
        }*/
    }

    forgotPassword() {
        this.router.navigate(['/forgotPassword']);
    }

    navigateToDashbaord(){
        this.router.navigate(['/dashboard']);
    }

}
