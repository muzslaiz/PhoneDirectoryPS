import {provideRouter, RouterConfig} from '@angular/router';

import {Main} from './main';
import {Login} from './components/login/script';
import {LoginFailed} from './components/login_failed/script';
import {About} from './components/about/about';
import {PhoneDirectory} from './components/PhoneDirectory/script';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/app/login',
    terminal: true
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'app',
    component: Main,
    children: [
      { path: 'login', component: Login },
      { path: 'login-failed', component: LoginFailed },
      { path: 'PhoneDirectory', component: PhoneDirectory }
    ]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];



