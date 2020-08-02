import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/account/shared/user.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: "account-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})

export class RegisterComponent implements OnInit {
    constructor(public userService: UserService, private toastr: ToastrService){

    }
    ngOnInit(){
        this.userService.formModel.reset();
    }

    onSubmit(){
        this.userService.register().subscribe(
            (res: any) => {
                if (res.succeeded) {
                    this.userService.formModel.reset();
                    this.toastr.success('New user created !', 'Registration successfully !');
                } else {
                    res.errors.forEach(element => {
                        switch (element.code) {
                            case 'DuplicateUserName': 
                                this.toastr.error('Username is already taken', 'Registration failed.');
                                break;
                            default:
                                this.toastr.error(element.description, 'Registration failed.');
                                break;
                        }
                    });
                }
            },
            err => {
                console.log(err);
            } 
        );
    }
}