import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/account/shared/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
isExpanded = false;
userDetails;
constructor(private router: Router, private userService: UserService) {
    
  }

  ngOnInit(){
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log("erro: " + err);
      }
    );
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onLogOut() {
    localStorage.removeItem('token');
    this.router.navigate(['user/login']);
  }
}
