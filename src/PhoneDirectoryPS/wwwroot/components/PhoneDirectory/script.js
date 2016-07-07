System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var PhoneDirectory;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PhoneDirectory = (function () {
                function PhoneDirectory(_el) {
                    this.currentDate = '';
                    this.Persons = [];
                    this.fPersons = [];
                    this.filteredPersons = [];
                    this.elementIncrementation = 20;
                    this.loadedElements = 0;
                    this.loadingNew = false;
                    console.log('PhoneDirectory');
                    this.elementRef = _el;
                    this.fillPersons();
                }
                PhoneDirectory.prototype.fillPersons = function () {
                    // TODO : get data from server
                    this.Persons = [
                        {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        }, {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Csizik Viktor',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Tutat Kukutyinba',
                            StaffCode: 'HU1234',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Cukorka Kukitimbaha',
                            StaffCode: 'HU1200',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        },
                        {
                            FullName: 'Mézes Csoki Rolád',
                            StaffCode: 'HU1000',
                            Photo: 'Abraham Dora.jpg',
                            Position: 'Systems Developement Consultant',
                            mobile: '+36309640040',
                            extension: '1234',
                            email: 'csizik.viktoe@gmail.com',
                            entrance: '2016-01-01',
                            end: '2016-01-01',
                            contract: 'Employee',
                            Company: 'Hungary',
                            Status: 'Active'
                        }
                    ];
                    // TODO : ez csak teszt //////
                    this.Persons = this.Persons.concat(this.Persons.slice(0));
                    this.Persons = this.Persons.concat(this.Persons.slice(0));
                    this.Persons = this.Persons.concat(this.Persons.slice(0));
                    this.Persons = this.Persons.concat(this.Persons.slice(0));
                    this.Persons = this.Persons.concat(this.Persons.slice(0));
                    this.Persons = this.Persons.concat(this.Persons.slice(0));
                    this.Persons = this.Persons.concat(this.Persons.slice(0));
                    this.Persons = this.Persons.concat(this.Persons.slice(0));
                    //////////////////////
                    console.log(this.Persons.length);
                    this.searchedTextChanged();
                };
                PhoneDirectory.prototype.ngAfterViewInit = function () {
                    console.log('PhoneDirectory - loaded');
                };
                PhoneDirectory.prototype.searchedTextChanged = function () {
                    if (this.searchedText && this.searchedText != undefined && this.searchedText.length > 0) {
                        var stext_1 = this.searchedText.toLocaleLowerCase();
                        this.fPersons = this.Persons
                            .filter(function (n1) { return n1 && (n1.FullName.toLocaleLowerCase().indexOf(stext_1) > -1 || n1.StaffCode.toLocaleLowerCase().indexOf(stext_1) > -1); })
                            .sort(function (n1, n2) { return n1.FullName > n2.FullName; });
                        this.filteredPersons = this.fPersons.slice(0, this.elementIncrementation);
                    }
                    else {
                        this.fPersons = this.Persons.slice(0);
                        this.filteredPersons = this.Persons.slice(0, this.elementIncrementation);
                    }
                    var scrollableDiv = document.getElementById('scollable-pd');
                    if (scrollableDiv && scrollableDiv != undefined)
                        scrollableDiv.scrollTop = 0;
                    this.loadedElements = this.elementIncrementation;
                };
                PhoneDirectory.prototype.onScroll = function (event) {
                    var scrollableDiv = document.getElementById('scollable-pd');
                    var elementHeight = scrollableDiv.clientHeight;
                    var sTop = scrollableDiv.scrollTop;
                    var maxHeight = scrollableDiv.scrollHeight;
                    if (!this.loadingNew && maxHeight - (sTop + elementHeight) < 100) {
                        this.loadingNew = true;
                        console.log('Load');
                        this.loadedElements += this.elementIncrementation;
                        this.filteredPersons = this.fPersons.slice(0, this.loadedElements);
                    }
                    else {
                        this.loadingNew = false;
                    }
                };
                PhoneDirectory = __decorate([
                    core_1.Component({
                        selector: 'PhoneDirectory',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: './components/PhoneDirectory/dom.html',
                        styleUrls: ['./components/PhoneDirectory/style.css'],
                        encapsulation: core_1.ViewEncapsulation.Emulated
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], PhoneDirectory);
                return PhoneDirectory;
            }());
            exports_1("PhoneDirectory", PhoneDirectory);
        }
    }
});
//# sourceMappingURL=script.js.map