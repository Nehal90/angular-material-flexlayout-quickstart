import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  @ViewChild('sideNav') sideNav: MatSidenav;

  title = 'app';

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sideNav.open();
  }

}
