import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Pipes ';
  birthday = new Date();
  heroes: any[] = [];
  canFly = true;

  constructor() {
    this.reset();
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
