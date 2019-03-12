import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos: any [] = [];
  videoSel: any;

  constructor(public youtubeService: YoutubeService) {
    this.youtubeService.getVideos().subscribe(videoYoutube => {
      this.videos = videoYoutube;
      console.log(this.videos);
    });
  }

  verVideo(video: any) {
    this.videoSel = video;
    $('#exampleModalLong').modal();

  }

  ngOnInit() {

  }

}
