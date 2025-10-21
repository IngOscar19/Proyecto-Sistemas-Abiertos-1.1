import { ChangeDetectionStrategy, Component, inject, OnInit  } from '@angular/core';
import { GifsService } from '../../services/gif.service';
import { GifCardComponent } from '../../components/GifCardComponent/GifCardcomponent';

@Component({
  selector: 'app-trendin-page',
  imports: [GifCardComponent],
  templateUrl: './trendin-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendinPageComponent { 
  gifsService = inject(GifsService);

  ngOnInit() {
    
    this.gifsService.searchGifs('trending');
  }
}
