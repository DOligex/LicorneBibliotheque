import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recap-kind-public',
  templateUrl: './recap-kind-public.component.html',
  styleUrls: ['./recap-kind-public.component.scss']
})
export class RecapKindPublicComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Liste des types de publics');
  }

}
