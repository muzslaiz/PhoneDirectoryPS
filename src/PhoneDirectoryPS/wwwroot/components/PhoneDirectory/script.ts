import {Component, ViewEncapsulation, ElementRef, AfterViewInit, } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

declare var $:JQueryStatic;

@Component({
    selector: 'PhoneDirectory',
    directives:[ROUTER_DIRECTIVES],
    templateUrl: './components/PhoneDirectory/dom.html',
    styleUrls: ['./components/PhoneDirectory/style.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class PhoneDirectory implements AfterViewInit{
    id: string;
    elementRef: ElementRef;

    currentDate: string = '';
    searchedText: string;

    Persons:any = [];
    fPersons:any = [];
    filteredPersons:any = [];

    constructor(_el: ElementRef) {
        console.log('PhoneDirectory');
        this.elementRef = _el;
        this.fillPersons();
    }

    fillPersons(){
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
            },{
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
    }

    ngAfterViewInit() {
        console.log('PhoneDirectory - loaded');
    }

    private elementIncrementation: number = 20;
    private loadedElements: number = 0;
    private loadingNew: boolean = false;
    searchedTextChanged(){
        if(this.searchedText && this.searchedText != undefined && this.searchedText.length > 0){
            let stext = this.searchedText.toLocaleLowerCase();
            this.fPersons = this.Persons
                .filter((n1: any) => n1 && (n1.FullName.toLocaleLowerCase().indexOf(stext) > -1 || n1.StaffCode.toLocaleLowerCase().indexOf(stext) > -1))
                .sort((n1: any, n2: any) => n1.FullName > n2.FullName);
            this.filteredPersons = this.fPersons.slice(0, this.elementIncrementation);
        }
        else{
            this.fPersons = this.Persons.slice(0);
            this.filteredPersons = this.Persons.slice(0, this.elementIncrementation);
        }
        let scrollableDiv = document.getElementById('scollable-pd');
        if(scrollableDiv && scrollableDiv != undefined)
            scrollableDiv.scrollTop = 0;
        this.loadedElements = this.elementIncrementation;
    }


    onScroll(event) {
        let scrollableDiv = document.getElementById('scollable-pd');
        var elementHeight = scrollableDiv.clientHeight;
        var sTop = scrollableDiv.scrollTop;
        var maxHeight = scrollableDiv.scrollHeight;

        if(!this.loadingNew && maxHeight - (sTop + elementHeight) < 100){
            this.loadingNew = true;
            console.log('Load');
            this.loadedElements += this.elementIncrementation;
            this.filteredPersons = this.fPersons.slice(0, this.loadedElements);
        }
        else{
            this.loadingNew = false;
        }
    }

}