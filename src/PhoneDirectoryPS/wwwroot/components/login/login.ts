import {Component, ViewEncapsulation} from '@angular/core';

import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'login',
    directives:[ROUTER_DIRECTIVES],
    templateUrl: './components/login/login.html'
})

export class Login {
    id: string;
}