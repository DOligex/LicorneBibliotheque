import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'movie', loadChildren: () => import('./pages/movies/movie/movie.module').then(m => m.MovieModule) },
  { path: 'recapMovie', loadChildren: () => import('./pages/movies/recap-movie/recap-movie.module').then(m => m.RecapMovieModule) },
  { path: 'actor', loadChildren: () => import('./pages/actors/actor/actor.module').then(m => m.ActorModule) },
  { path: 'recapActor', loadChildren: () => import('./pages/actors/recap-actor/recap-actor.module').then(m => m.RecapActorModule) },
  { path: 'kind', loadChildren: () => import('./pages/kindmovies/kind/kind.module').then(m => m.KindModule) },
  { path: 'recapKind', loadChildren: () => import('./pages/kindmovies/recap-kind/recap-kind.module').then(m => m.RecapKindModule) },
  { path: 'country', loadChildren: () => import('./pages/countrys/country/country.module').then(m => m.CountryModule) },
  { path: 'recapCountry', loadChildren: () => import('./pages/countrys/recap-country/recap-country.module').then(m => m.RecapCountryModule) },
  { path: 'recapKindPublic', loadChildren: () => import('./pages/public/recap-kind-public/recap-kind-public.module').then(m => m.RecapKindPublicModule) },
  { path: 'kindPublic', loadChildren: () => import('./pages/public/kind-public/kind-public.module').then(m => m.KindPublicModule) },
  { path: 'movie', loadChildren: () => import('./pages/movies/movie/movie.module').then(m => m.MovieModule) },
  { path: 'recapMovie', loadChildren: () => import('./pages/movies/recap-movie/recap-movie.module').then(m => m.RecapMovieModule) },
  { path: 'tab-movie', loadChildren: () => import('./components/tables/tab-movie/tab-movie.module').then(m => m.TabMovieModule) },
  { path: 'tab-actor', loadChildren: () => import('./components/tables/tab-actor/tab-actor.module').then(m => m.TabActorModule) }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
