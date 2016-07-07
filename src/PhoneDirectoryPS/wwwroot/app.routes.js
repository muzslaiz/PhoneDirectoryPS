System.register(['@angular/router', './main', './components/login/script', './components/login_failed/script', './components/about/about', './components/PhoneDirectory/script'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, main_1, script_1, script_2, about_1, script_3;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (script_1_1) {
                script_1 = script_1_1;
            },
            function (script_2_1) {
                script_2 = script_2_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (script_3_1) {
                script_3 = script_3_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                {
                    path: '',
                    redirectTo: '/app/login',
                    terminal: true
                },
                {
                    path: 'about',
                    component: about_1.About
                },
                {
                    path: 'app',
                    component: main_1.Main,
                    children: [
                        { path: 'login', component: script_1.Login },
                        { path: 'login-failed', component: script_2.LoginFailed },
                        { path: 'PhoneDirectory', component: script_3.PhoneDirectory }
                    ]
                }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map