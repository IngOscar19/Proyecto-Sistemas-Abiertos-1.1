import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 
  envs = environment;
}