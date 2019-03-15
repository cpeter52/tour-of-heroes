import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Black Panther' },
      { id: 12, name: 'Black Widow' },
      { id: 13, name: 'Static Shock' },
      { id: 14, name: 'The Hulk' },
      { id: 15, name: 'Thor' },
      { id: 16, name: 'Iron Man' },
      { id: 17, name: 'WAR Machine' },
      { id: 18, name: 'Mario' },
      { id: 19, name: 'Sonic' },
      { id: 20, name: 'SpiderMan' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
