import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kind-public',
  templateUrl: './kind-public.component.html',
  styleUrls: ['./kind-public.component.scss']
})
export class KindPublicComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Type de public');
  }

}
