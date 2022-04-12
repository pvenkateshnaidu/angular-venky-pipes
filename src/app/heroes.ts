export interface Flyer {
  canFly: boolean;
  name: string;
  value: any;
}
export const HEROES = [
  { name: 'Windstorm', canFly: true, value: { test: 'test1' } },
  { name: 'Bombasto', canFly: false, value: { test: 'test2' } },
  { name: 'Magneto', canFly: false, value: { test: 'test3' } },
  { name: 'Tornado', canFly: true, value: { test: 'test4' } },
];
