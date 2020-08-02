import { NgModule } from '@angular/core';

import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { CommonModule } from '@angular/common';  
import { UserService } from './shared/user.service';
import { UserModule } from './user/user.module';

@NgModule({
    imports: [
        AccountRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        UserModule,
        CommonModule
    ],
    declarations:[
        UserComponent
    ],
    providers:[
        UserService
    ]
})

export class AccountModule {

}