import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gifs-side-menu-option',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gifs-side-menu-option.component.html',
})
export class GifsSideMenuOptionComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() router!: string;
}
