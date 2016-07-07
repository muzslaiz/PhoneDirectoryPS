System.register(['@angular/core', '@angular/router', '../../node_modules/ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ng2_bootstrap_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(_el, _router) {
                    this._router = _router;
                    console.log('Login');
                    this.elementRef = _el;
                    this.router = _router;
                }
                Login.prototype.ngAfterViewInit = function () {
                    //$('[data-toggle="tooltip"]').tooltip({html:true});
                    console.log('Login - loaded');
                };
                Login.prototype.login = function () {
                    // TODO : ide kell majd a login vizsgálat
                    this.router.navigate(['/app/PhoneDirectory']);
                    //this.router.navigate(['/app/login-failed']);
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.TOOLTIP_DIRECTIVES],
                        templateUrl: './components/login/dom.html',
                        styleUrls: ['./bower_components/custom/bootstrap-combined.min.css', './components/login/style.css'],
                        encapsulation: core_1.ViewEncapsulation.Emulated
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router])
                ], Login);
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=script.js.map