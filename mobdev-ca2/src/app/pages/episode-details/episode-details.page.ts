import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
    //episode-deta Observable<any>;
    episode: any;
    episodeId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
    ngOnInit() {

        let id = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getEpisode(`/tabs/episodes/${id}`).subscribe(res => {
        // this.http.get(`/tabs/episodes/${id}`).subscribe(res => {
            this.episode = res[0];

        });
    }
}
