import { Component, VERSION } from '@angular/core';
import { HEROES } from './heroes';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Pipes ';
  currentClasses: any = {};
  currentStyles: any = {};
  birthday = new Date();
  heroes: any[] = [];
  canFly = true;

  constructor() {
    this.reset();

    this.currentClasses = {
      saveable: true,
      modified: false,
      special: true,
    };
    this.currentStyles = {
      'font-style': true ? 'italic' : 'normal',
      'font-weight': false ? 'bold' : 'normal',
      'font-size': true ? '24px' : '12px',
    };
  }
  addHero(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    let hero = { name, canFly: this.canFly };
    this.heroes.push(hero);
  }
  reset() {
    this.heroes = HEROES.slice();
  }
}
