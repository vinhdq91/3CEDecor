import { NgModule } from '@angular/core';
import { UserService } from '../shared/user.service';
import { LoginComponent } from './child/login/login.component';
import { RegisterComponent } from './child/register/register.component';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
    ],
    providers: [
        UserService
    ]
})

export class UserModule { }