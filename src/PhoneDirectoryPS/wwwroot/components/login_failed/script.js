System.register(['@angular/core', '@angular/router', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1;
    var LoginFailed;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            LoginFailed = (function () {
                function LoginFailed(_el, _router, _location) {
                    this._router = _router;
                    this.title = 'Invalid username!';
                    this.reason = '<span class="list-title">Reasons may be:</span>' +
                        '<ul>' +
                        '<li><b>You may have mistyped the user name.</b></li>' +
                        '<li><b>You are not registered as a user.</b> <br> <a href="mailto:">Please contact the system administrator.</a></li>' +
                        '</ul>';
                    console.log('LoginFailed');
                    this.elementRef = _el;
                    this.router = _router;
                    this.location = _location;
                }
                LoginFailed.prototype.ngAfterViewInit = function () {
                };
                LoginFailed.prototype.goBack = function () {
                    this.location.back();
                };
                LoginFailed = __decorate([
                    core_1.Component({
                        selector: 'loginfailed',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: './components/login_failed/dom.html',
                        styleUrls: ['./components/login_failed/style.css'],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, common_1.Location])
                ], LoginFailed);
                return LoginFailed;
            }());
            exports_1("LoginFailed", LoginFailed);
        }
    }
});
//# sourceMappingURL=script.js.map