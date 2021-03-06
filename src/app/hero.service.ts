import {Injectable} from '@angular/core';
import {Hero} from "./hero/hero";
import {Observable, of} from "rxjs";
import {HEROES} from "./mock-heroes";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number) : Observable<Hero> {
    const hero = HEROES.find(hero=> hero.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero);
  }

  constructor(private messageService: MessageService) { }
}
