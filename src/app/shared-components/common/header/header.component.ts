import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ResponsiveService, ScreenSize } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() open = false;
  @Output() openSidenav = new EventEmitter<boolean>();
  
  constructor(public responsive: ResponsiveService) {
  }

  public toggleSidenav() {
    this.open = !this.open;
    this.openSidenav.emit(this.open);
  }

}
