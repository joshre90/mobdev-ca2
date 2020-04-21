import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEpisodes(){
    return this.http.get(`https://8100-fb983808-a5a5-4e61-a2b7-7795f430d4b4.ws-eu01.gitpod.io/assets/episodes.json`);
    //https://www.breakingbadapi.com/api/episodes
    
  }
  getEpisode(id){
      return this.http.get(`https://8100-fb983808-a5a5-4e61-a2b7-7795f430d4b4.ws-eu01.gitpod.io/assets/episode.json`);
      //return this.http.get(`//https://www.breakingbadapi.com/api/episodes/${id}`);
  }

  getCharacters(){
      return this.http.get(`https://8100-fb983808-a5a5-4e61-a2b7-7795f430d4b4.ws-eu01.gitpod.io/assets/characters.json`);
      //return this.http.get(`//https://www.breakingbadapi.com/api/characters`);
  }

  getCharacter(id){
      return this.http.get(`https://8100-fb983808-a5a5-4e61-a2b7-7795f430d4b4.ws-eu01.gitpod.io/assets/character.json`);
      //return this.http.get(`//https://www.breakingbadapi.com/api/characters/${id}`);
  }

  getDeaths(){
      return this.http.get(`https://8100-fb983808-a5a5-4e61-a2b7-7795f430d4b4.ws-eu01.gitpod.io/assets/deaths.json`);
      //return this.http.get(`//https://www.breakingbadapi.com/api/deaths`);
  }

  getQuotes(){
      return this.http.get(`https://8100-fb983808-a5a5-4e61-a2b7-7795f430d4b4.ws-eu01.gitpod.io/assets/quotes.json`);
      //return this.http.get(`//https://www.breakingbadapi.com/api/quotes`);
  }

  getQuote(id){
      return this.http.get(`https://8100-fb983808-a5a5-4e61-a2b7-7795f430d4b4.ws-eu01.gitpod.io/assets/quote.json`);
      //return this.http.get(`//https://www.breakingbadapi.com/api/quotes/${id}`);
  }
  

}
