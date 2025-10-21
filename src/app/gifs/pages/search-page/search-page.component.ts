// 1. Importa OnInit y ActivatedRoute
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifsService } from '../../services/gif.service';
import { SearchBoxComponent } from '../../components/SearchBoxComponent/SearchBoxComponent.component';
import { GifCardComponent } from '../../components/GifCardComponent/GifCardcomponent';

@Component({
  selector: 'app-search-page',
  standalone: true, 
  imports: [SearchBoxComponent, GifCardComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent implements OnInit { 
  gifsService = inject(GifsService);

  
  private route = inject(ActivatedRoute);

  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['q'];
      if (query) {
        this.gifsService.searchGifs(query);
      }
    });
  }

  
  onSearch(query: string) {
    this.gifsService.searchGifs(query);
  }
}