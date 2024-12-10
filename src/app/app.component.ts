import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'angular-quickstart';
  imageList: string[] = [];
  private scriptLoaded = false;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadPostIds();
  }
  loadPostIds(): void {
    const basePath = 'https://www.instagram.com/p/';
    this.http.get<{ postIds: string[] }>('/assets/post-ids.json').subscribe(data => {
      this.imageList = data.postIds.map(id => `${basePath}${id}/`);
      this.loadInstagramScript(); // Load script after posts are added
    });
  }

  loadInstagramScript(): void {
    if (this.scriptLoaded) {
      this.processInstagramEmbeds();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://www.instagram.com/embed.js';
    script.onload = () => {
      this.scriptLoaded = true;
      this.processInstagramEmbeds();
    };
    document.body.appendChild(script);
  }

  processInstagramEmbeds(): void {
    setTimeout(() => {
      if (typeof (window as any).instgrm !== 'undefined') {
        (window as any).instgrm.Embeds.process();
      }
    }, 500); // Add a slight delay to ensure DOM stability
  }
}
