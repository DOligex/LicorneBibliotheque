import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToMovie() {
    this.router.navigateByUrl('/movie');
  }
  goToActor() {
    this.router.navigateByUrl('/actor');
  }
  goToCountry() {
    this.router.navigateByUrl('/country');
  }
  goToKind() {
    this.router.navigateByUrl('/kind');
  }
  goToKindPublic() {
    this.router.navigateByUrl('/kindPublic');
  }
  goToTestTab() {
    this.router.navigateByUrl('/tab-actor');
  }

}
