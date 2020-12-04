import { StorageService } from './../shared/services/storage.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FILMS } from './../mooks/films';
import { Component } from '@angular/core';

import { Film } from '../typings/film.type';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  films = FILMS;
  newFilm = {title:"", description: "", dateSortie: new Date};

  constructor(private StorageService: StorageService) { 
    const films = this.StorageService.getItem('films');
    this.films = FILMS;
  }

  removeFilm(index: number){
    this.films.splice(index, 1);
    // this.saveFilms();  
  }

  addFilm(){
    // this.films.unshift(this.newFilm)
    const film = {title:"", description: "", dateSortie: new Date};
    Object.assign(film, this.newFilm);
    this.films.unshift(film);
    this.StorageService.setItem('films', this.films),
    Object.assign(this.newFilm, {title:"", description: "", dateSortie: new Date});
  }

  setInUpdate(film: Film, inUpdate: boolean){
    film.inUpdate = inUpdate;
    if (inUpdate) {
      return;
    }
    this.StorageService.setItem('film', this.films);
  }

  getLocatFilms(){

  }

}
