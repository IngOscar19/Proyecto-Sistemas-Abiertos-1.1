import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gif-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './GifCard.component.html',
})
export class GifCardComponent { 
  @Input({ required: true }) gif!: any;

  onImageError(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = 'https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif';
  }
}