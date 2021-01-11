import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService, private routering: Router) {}

  ngOnInit(): void {}
  logOut() {
    this.authService.logOutUser().then(() => {
      this.routering.navigate(['/login']);
    });
  }
}
