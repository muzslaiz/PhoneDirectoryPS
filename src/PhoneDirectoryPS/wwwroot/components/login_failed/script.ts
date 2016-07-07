
import {Component, ViewEncapsulation, ElementRef, AfterViewInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Location} from '@angular/common';

declare var $:JQueryStatic;

@Component({
    selector: 'loginfailed',
    directives:[ROUTER_DIRECTIVES],
    templateUrl: './components/login_failed/dom.html',
    styleUrls: ['./components/login_failed/style.css'],
    encapsulation: ViewEncapsulation.None
})

export class LoginFailed implements AfterViewInit{
    id: string;
    elementRef: ElementRef;
    router: Router;
    location: Location;
    
    title: string = 'Invalid username!';
    reason: string =
        '<span class="list-title">Reasons may be:</span>'+
        '<ul>'+
        '<li><b>You may have mistyped the user name.</b></li>'+
        '<li><b>You are not registered as a user.</b> <br> <a href="mailto:">Please contact the system administrator.</a></li>'+
        '</ul>';

    constructor(_el: ElementRef, private _router: Router, _location: Location) {
        console.log('LoginFailed');
        this.elementRef = _el;
        this.router = _router;
        this.location = _location;
    }

    ngAfterViewInit() {
    }

    goBack(){
        this.location.back();
    }

}