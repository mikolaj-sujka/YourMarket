import { Component } from '@angular/core';

// 3rd
import { slider } from './animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ],
})
export class AppComponent {
  title = 'YourMarket';

  prepareRoute(outlet: any) {
    return outlet.activatedRouteData['depth'];
  }
}
