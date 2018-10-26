import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  providers: [ImageService]
})
export class NavigationBarComponent implements OnInit {

  images : FirebaseListObservable<any[]>;
  mainLogo: string;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    this.images.subscribe(p => {
      this.mainLogo = p[0].liveNationEntertainmentLogo;
      console.log(this.mainLogo)
    });
  }
}
