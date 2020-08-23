import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recap-country',
  templateUrl: './recap-country.component.html',
  styleUrls: ['./recap-country.component.scss']
})
export class RecapCountryComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Liste des pays');
  }

}
