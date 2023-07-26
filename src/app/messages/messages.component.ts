import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'tofh-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(
    public messageService: MessageService,
    private heroService: HeroService
  ) { }


}
