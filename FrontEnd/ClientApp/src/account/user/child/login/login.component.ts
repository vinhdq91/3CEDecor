import { Component, OnInit } from '@angular/core';

@Component({
    selector: "account-login",
    templateUrl: "./login.component.html"
})

export class LoginComponent implements OnInit {
    formModel = {
        UserName: '',
        Password: ''
    }
    ngOnInit(){}
}