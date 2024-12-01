import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'angular-quickstart';
  imageList: string[] = [];
  ngOnInit(): void {
    // Add paths to the image array dynamically
    const basePath = '/assets/lens_of_lakshay/';
    const images = [
      'IMG_20240126_152116.jpg',
      'IMG_20220304_090751.jpg',
      'IMG_20220304_162702.jpg',
      'IMG_20240126_181327.jpg',
      'IMG_20240126_201612.jpg',
      'IMG_20240427_161608.jpg',
      'IMG_20240505_142108.jpg',
      'IMG_20240509_095343 (1).jpg',
      'IMG_20240613_184203 (1).jpg',
      'IMG_20240830_134800.jpg',
      'IMG_20240927_211931.jpg',
      'IMG_20241113_183854.jpg',
      'IMG_20241120_164528.jpg',
      'IMG_20241123_161354.jpg',
      'IMG_20241126_134516.jpg',
      'PXL_20220630_134237066.jpg',
      'PXL_20220728_141005971.jpg',
      'charbagh.jpg',
      'IMG_20240120_131251.jpg',
      // Add more image names here
    ];

    this.imageList = images.map(image => `${basePath}${image}`);
  }
}
