import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from 'src/account/user/user.component';
import { LoginComponent } from 'src/account/user/child/login/login.component';
import { RegisterComponent } from 'src/account/user/child/register/register.component';
import { AuthGuard } from 'src/account/auth/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
                { path: '', redirectTo: 'user/login', pathMatch: 'full' },
                {
                    path: 'user', component: UserComponent,
                    children: [
                        { path: 'login', component: LoginComponent },
                        { path: 'registor', component: RegisterComponent }
                    ] 
                },
            ]
        )
    ]
})

export class AppRoutingModule {}