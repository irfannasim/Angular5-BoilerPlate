import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'not-found-404-component',
    templateUrl: '../../templates/errors/not-found-404.template.html',
    styleUrls: ['../../styles/errors/not-found-404.style.css']
})
export class NotFound404Component implements OnInit {

    constructor(private titleService: Title) {
    };

    ngOnInit() {
        this.titleService.setTitle('Resource not found');
    }

}
