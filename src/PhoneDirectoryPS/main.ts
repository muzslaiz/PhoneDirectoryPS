import {HTTP_PROVIDERS} from '@angular/http';
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HashLocationStrategy, LocationStrategy, Location} from '@angular/common';
import {APP_ROUTER_PROVIDERS } from './app.routes';
import {Login} from './components/login/script';

@Component(
{
    selector: 'main',
    templateUrl: 'main.html',
    directives:[ROUTER_DIRECTIVES]
})

export class Main {

    constructor(public location: Location) {
        console.log('main loaded friend');
    }

    getLinkStyle(path) {

        if(path === this.location.path()){
            return true;
        }
        else if(path.length > 0){
            return this.location.path().indexOf(path) > -1;
        }
    }
}

bootstrap(Main,[
    Login,
    APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    HTTP_PROVIDERS])
    .catch(err => console.error(err));