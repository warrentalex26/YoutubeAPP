import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeURL = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyD3FyQFh3Z3wQRVDknU8EfpUML2Fbjh-e8';
  private playlist = 'UUKz6D53uy_0KLSSljqQDHdw';
  private nextPage = '';

  constructor(public http: HttpClient) { }

  getVideos() {
    let url = `${this.youtubeURL}/playlistItems`;
    let params = new HttpParams();
    // Se pone params = el mismo porque sino se hace multiples instancias y genera error.
    params = params.set('part', 'snippet');
    params = params.set('maxResults', '10');
    params = params.set('playlistId', this.playlist);
    params = params.set('key', this.apikey);
    
    if (this.nextPage) {
      params = params.set('pageToken', this.nextPage);
    }

    return this.http.get(url, {params})
      .pipe(map(respuesta => {
        console.log(respuesta);
        this.nextPage = respuesta.nextPageToken;
        let videos: any [] = [];
        for (let video of respuesta.items) {
          let snippetYoutube = video.snippet;
          videos.push(snippetYoutube);
        }
        return videos;
        console.log(videos);
      }));
  }
}
