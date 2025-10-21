import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GifsService } from '../../services/gif.service';
import { SearchBoxComponent } from '../../components/SearchBoxComponent/SearchBoxComponent.component';
import { GifCardComponent } from '../../components/GifCardComponent/GifCardcomponent';

@Component({
  selector: 'app-search-page',
  imports: [SearchBoxComponent, GifCardComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent {
  gifsService = inject(GifsService);

  onSearch(query: string) {
    this.gifsService.searchGifs(query);
  }
 }
