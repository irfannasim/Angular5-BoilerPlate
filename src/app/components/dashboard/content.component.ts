import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../../services/requests.service';
import {Router} from '@angular/router';
import {PermissionsService} from '../../services/permissions.service';
import {UserSharedService} from '../../services/user.shared.service';
import {HISUtilService} from '../../services/his-util.service';

@Component({
    selector: 'content-component',
    templateUrl: '../../templates/dashboard/content.template.html',
    styleUrls: ['../../styles/dashboard/content.style.css']
})
export class ContentComponent implements OnInit {
    firstName: string;
    lastName: string;
    profileImg: string;
    roles: string;

    constructor(private requestsService: RequestsService,
                private router: Router,
                private permissionsService: PermissionsService,
                private userSharedService: UserSharedService,
                private HISUtilService: HISUtilService) {
    };

    ngOnInit() {
        this.firstName = 'Irfan';
        this.lastName = ' Nasim';
        this.profileImg = '';
    }

}
