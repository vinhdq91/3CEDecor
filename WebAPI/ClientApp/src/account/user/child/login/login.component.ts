import { Component, OnInit } from '@angular/core';
import { FormsModule }  from '@angular/forms';

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