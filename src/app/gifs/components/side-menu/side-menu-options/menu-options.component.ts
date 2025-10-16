import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOption } from '../../../interfaces/menu-option.interface';
import {GifsSideMenuOptionComponent} from "../../gifs-side-menu-option/gifs-side-menu-option.component";

@Component({
  selector: 'app-menu-options',
  imports: [CommonModule, GifsSideMenuOptionComponent],
  templateUrl: './menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuOptionsComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-house',
      title: 'Dashboard',
      subtitle: 'Data Overview',
      router: '/dashboard',
    },
    {
      icon: 'fa-solid fa-fire',
      title: 'Trending',
      subtitle: 'The best gifs',
      router: '/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'Search',
      subtitle: 'Find what you need',
      router: '/search',
    },
  ];
 }
