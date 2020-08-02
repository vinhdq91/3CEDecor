import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/child/login/login.component';
import { RegisterComponent } from './user/child/register/register.component';

const accRoutes: Routes = [
    {
        path: "user", component: UserComponent,
        children: [
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(accRoutes)
    ],
    exports: [ RouterModule ]
})

export class AccountRoutingModule {}