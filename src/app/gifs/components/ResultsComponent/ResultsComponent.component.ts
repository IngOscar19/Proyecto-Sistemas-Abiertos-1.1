import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../../services/gif.service';
import { GifCardComponent } from "../../components/GifCardComponent/GifCardcomponent";

@Component({
  selector: 'app-results-component',
  standalone: true, 
  imports: [CommonModule, GifCardComponent],
  templateUrl: './ResultsComponent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // ⚡ Optimización
})
export class ResultsComponentComponent {
  gifsService = inject(GifsService);

  
  trackByGifId(index: number, gif: any): string {
    return gif.id;
  }
}