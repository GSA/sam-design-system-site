import { Component, Input, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: "youtube-video",
  template: `
  <div class="sam-ui embed video ratio16by9">
    <iframe [src]="videoUrl" allow="autoplay; encrypted-media" allowfullscreen>
    </iframe>
  </div>
  `
})
export class VideoEmbedComponent implements OnInit{
  
  @Input() public id: string;

  YouTubeVideoUrl: string;
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(){
    this.updateVideoUrl(this.id);
  }

  updateVideoUrl(id: string){
    this.YouTubeVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.YouTubeVideoUrl);
  }

}