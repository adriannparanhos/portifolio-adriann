import { Component } from '@angular/core';
import { TOOLS_PLATFORMS_ICONS } from '../../../shared/utils/icons.constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public toolsPlatformsIcons = TOOLS_PLATFORMS_ICONS;
}
