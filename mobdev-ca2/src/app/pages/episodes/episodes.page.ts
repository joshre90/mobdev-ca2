import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
  episodes: Observable<any>;
  constructor(private router: Router, private api: ApiService) { }
  ngOnInit() {
      this.episodes = this.api.getEpisodes();
<<<<<<< HEAD
     // this.episodes.subscribe(data=> {
     // console.log('mydata:', data)
      //})
=======
      this.episodes.subscribe(data=> {
          console.log('mydata :',data)
      })
>>>>>>> cfe9827c0667bc83ff8cb7c896aba60d3f9c1e12
  }

  openDetails(episode){
      let episodeId = episode.episode_id;
      this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
  }

}