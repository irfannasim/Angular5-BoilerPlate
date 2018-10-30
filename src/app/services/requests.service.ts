import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Router} from '@angular/router';
import {AppConfig} from '../configuration/app.config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RequestsService {
    constructor(private http: HttpClient,
                private router: Router,
                private appConfig: AppConfig) {
    };

    getToken() {
        return window.localStorage.getItem(btoa('access_token'));
    }

    getBEAPIServer() {
        var protocol = AppConfig.BE_HTTP_PROTOCOL; // http
        var server = AppConfig.BE_API_ENDPOINT; // 192.168.1.188
        var port = AppConfig.BE_API_PORT;
        var contextPath = '/' + AppConfig.BE_API_CONTEXT_PATH;
        if (protocol === '' || !protocol || server === '' || !server)
            return ''
        else {
            if (port === '' || !port) {
                return protocol + AppConfig.BE_HTTP_SEPARATOR + server + ':' + port + contextPath
            }
            else {
                return protocol + AppConfig.BE_HTTP_SEPARATOR + server + ':' + port + contextPath
            }
        }
    }

    postRequestOauth2Token(url: any, _params: any) {
        const reqHeader = new HttpHeaders({'Authorization': 'Basic ' + btoa(AppConfig.BE_ACCESS_CLIENT + ':' + AppConfig.BE_ACCESS_SECRET)});
        let URI = this.getBEAPIServer() + url + '?username=' + _params['userName'] + '&password=' + _params['password'] + '&grant_type=' + _params['grantType'];

        return this.http.post(URI, _params, {headers: reqHeader});
    }

    getRequest(url: any) {
        const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + atob(this.getToken())});
        reqHeader.append('Content-Type', 'application/json');
        return this.http.get(this.getBEAPIServer() + url, {headers: reqHeader});
    }

    postRequest(url: any, _params: any) {
        const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + atob(this.getToken())});
        reqHeader.append('Content-Type', 'application/json');
        return this.http.post(this.getBEAPIServer() + url, _params, {headers: reqHeader});
    }

    deleteRequest(url: any) {
        const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + atob(this.getToken())});
        reqHeader.append('Content-Type', 'application/json');
        return this.http.delete(this.getBEAPIServer() + url, {headers: reqHeader});

    }

    findById(url: any): Observable<any> {
        const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + atob(this.getToken())});
        reqHeader.append('Content-Type', 'application/json');
        return this.http.get(this.getBEAPIServer() + url, {headers: reqHeader})
            .map((data: any) => {
                return data.responseData as Object;
            });
        ;
        //.catch((error:any) => Observable.throw(error.json().error || 'Error'));
    }

    putRequest(url: any, _params: any) {
        const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + atob(this.getToken())});
        reqHeader.append('Content-Type', 'application/json');
        return this.http.put(this.getBEAPIServer() + url, _params, {headers: reqHeader});
    }

    getRequestWithParam(url: any, param: any) {
        const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + atob(this.getToken())});
        reqHeader.append('Content-Type', 'application/json');
        let params = new HttpParams().set('name', param);
        return this.http.get(this.getBEAPIServer() + url, {headers: reqHeader, params: params});
    }

    postRequestMultipartFormData(url: any, data: any) {
        const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + atob(this.getToken())});
        let formData: FormData = new FormData();
        formData.append('file', data, data.name);
        return this.http.post(this.getBEAPIServer() + url, formData, {headers: reqHeader});
    }

}
