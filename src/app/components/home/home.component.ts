import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos: any [] = [];

  constructor(public youtubeService: YoutubeService) {
    this.youtubeService.getVideos().subscribe(videoYoutube => {
      this.videos = videoYoutube;
      console.log(this.videos);
    });
  }

  ngOnInit() {

  }

}
