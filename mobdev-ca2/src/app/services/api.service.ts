import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEpisodes(){
    return this.http.get(`https://github.com/joshre90/mobdev-ca2/blob/bcc7a17870ad542813433bd862d67f20c1142908/mobdev-ca2/src/assets/episodes.json`);

    //https://github.com/joshre90/mobdev-ca2/blob/bcc7a17870ad542813433bd862d67f20c1142908/mobdev-ca2/src/assets/episodes.json
    //https://www.breakingbadapi.com/api/episodes
  }
  getEpisode(id){
      return this.http.get(`https://github.com/joshre90/mobdev-ca2/blob/bcc7a17870ad542813433bd862d67f20c1142908/mobdev-ca2/src/assets/episodes.json${id}`);
  }
}
