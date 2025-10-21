import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOption } from '../../../interfaces/menu-option.interface';
import { GifsSideMenuOptionComponent } from "../../gifs-side-menu-option/gifs-side-menu-option.component";
import { GifsService } from '../../../services/gif.service';
import { Router } from '@angular/router';
import { HistoryOption } from '../../../interfaces/history-option.interface';

@Component({
  selector: 'app-menu-options',
  imports: [CommonModule, GifsSideMenuOptionComponent],
  templateUrl: './menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuOptionsComponent {
  private gifsService = inject(GifsService);
  private router = inject(Router);

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

  get historyOptions(): { title: string; query: string; icon: string }[] {
  return this.gifsService.history().slice(0, 5).map(term => ({
    icon: 'fa-solid fa-clock-rotate-left',
    title: term,
    query: term, 
  }));
}

  goToSearch(query: string) {
    this.router.navigate(['/search'], { queryParams: { q: query } });
  }

}
