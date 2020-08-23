import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recap-kind',
  templateUrl: './recap-kind.component.html',
  styleUrls: ['./recap-kind.component.scss']
})
export class RecapKindComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Liste des genres de films');
  }

}
