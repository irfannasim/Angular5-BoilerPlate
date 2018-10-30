import {Injectable} from "@angular/core";
import "rxjs/Rx";

@Injectable()
export class UserSharedService {

    firstName: string;
    lastName: string;
    profileImg: string;
    email: string;
    userName: string;
    roles: string;

}