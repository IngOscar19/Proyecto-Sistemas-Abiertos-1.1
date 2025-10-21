import { Component, inject } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { SearchBoxComponent } from '../../components/SearchBoxComponent/SearchBoxComponent.component';
import { GifsService } from '../../services/gif.service';
import { ResultsComponentComponent } from "../../components/ResultsComponent/ResultsComponent.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [SideMenuComponent, SearchBoxComponent, ResultsComponentComponent],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {
  private gifsService = inject(GifsService);

  onSearch(query: string) {
    this.gifsService.searchGifs(query);
  }
}