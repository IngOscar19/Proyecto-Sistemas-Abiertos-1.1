import { Component } from '@angular/core';
import { HeaderComponent } from './side-menu-header/header.component';
import { MenuOptionsComponent } from './side-menu-options/menu-options.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [HeaderComponent, MenuOptionsComponent],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {}
