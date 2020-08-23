import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recap-actor',
  templateUrl: './recap-actor.component.html',
  styleUrls: ['./recap-actor.component.scss']
})
export class RecapActorComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Liste des acteurs');
  }

}
