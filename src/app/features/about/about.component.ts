import { Component } from '@angular/core';
import { TECH_ICONS, DB_ICONS, LIBRARY_FRAMEWORKS_ICONS, TOOLS_PLATFORMS_ICONS, GAME_DEV_ICONS } from '../../shared/utils/icons.constants';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public icons = TECH_ICONS;
  public dbIcons = DB_ICONS;
  public libraryFrameworksIcons = LIBRARY_FRAMEWORKS_ICONS;
  public toolsPlatformsIcons = TOOLS_PLATFORMS_ICONS;
  public gameDevIcons = GAME_DEV_ICONS;
}
