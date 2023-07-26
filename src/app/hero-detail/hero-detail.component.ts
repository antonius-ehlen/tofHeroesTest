import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'tofh-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero?: Hero

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero()
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero)
  }

  goBack() {
    this.location.back()
  }

  save() {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack())
    }
  }
}
