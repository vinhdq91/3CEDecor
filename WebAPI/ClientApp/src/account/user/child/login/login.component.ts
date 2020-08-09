import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm }  from '@angular/forms';
import { UserService } from 'src/account/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: "account-login",
    templateUrl: "./login.component.html"
})

export class LoginComponent implements OnInit {
    formModel = {
        UserName: '',
        Password: ''
    }

    constructor(private service: UserService, private router: Router, private toasrt: ToastrService) {

    }

    ngOnInit(){
        if(localStorage.getItem('token') != null){
            this.router.navigateByUrl('/');
        }
    }

    onSubmit(form: NgForm){
        this.service.login(form.value).subscribe((result: any) => {
            localStorage.setItem('token', result.token);
            this.router.navigateByUrl('/');
        },
        error => {
            if(error.status == 400){
                this.toasrt.error('Incorrect username or password.', 'Authentication failed.');
            }
            else{
                console.log(error);
            }
        });
    }
}