import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navOpen = false;
  exclusive = false;
  constructor(private _dus:DesignUtilityService) {}

  ngOnInit(): void {
    this._dus.exclusive$.subscribe(res=> this.exclusive = res)
  }

  navToggle() {
    this.navOpen = !this.navOpen;
  }
}
