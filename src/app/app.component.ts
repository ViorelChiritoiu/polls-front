import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'polls-front';
  isCollapsed = true;
  // private currentUser: UserInfo;
  userInfo: any;

  isLoggedIn() {

  }

  logout() {

  }

  ngOnInit(): void {
  }
}
