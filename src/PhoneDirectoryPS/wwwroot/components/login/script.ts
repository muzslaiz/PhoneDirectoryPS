import {Component, ViewEncapsulation, ElementRef, AfterViewInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {TOOLTIP_DIRECTIVES} from '../../node_modules/ng2-bootstrap/ng2-bootstrap';

declare var $:JQueryStatic;

@Component({
    selector: 'login',
    directives:[ROUTER_DIRECTIVES, TOOLTIP_DIRECTIVES],
    templateUrl: './components/login/dom.html',
    styleUrls: ['./bower_components/custom/bootstrap-combined.min.css', './components/login/style.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class Login implements AfterViewInit{
    id: string;
    elementRef: ElementRef;
    router: Router;

    constructor(_el: ElementRef, private _router: Router) {
        console.log('Login');
        this.elementRef = _el;
        this.router = _router;
    }

    ngAfterViewInit() {
        //$('[data-toggle="tooltip"]').tooltip({html:true});
        console.log('Login - loaded');
    }

    login(){
        // TODO : ide kell majd a login vizsgálat
        this.router.navigate(['/app/PhoneDirectory']);
        
        //this.router.navigate(['/app/login-failed']);
    }

}