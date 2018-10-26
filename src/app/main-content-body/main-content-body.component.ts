import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-main-content-body',
  templateUrl: './main-content-body.component.html',
  styleUrls: ['./main-content-body.component.css'],
  providers: [ImageService]
})
export class MainContentBodyComponent implements OnInit {

  images : FirebaseListObservable<any[]>;
  userProfileIcon: string;
  globeIcon: string;
  liveNationConcertsLogoGrey: string;
  liveNationMediaAndSponsorshipsLogoGrey: string;
  ticketmasterLogoGrey: string;
  liveNationEntertainmentLogoGrey: string;


  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    this.images.subscribe(p => {
      this.userProfileIcon = p[1].userProfileIcon;
      this.globeIcon = p[2].globeIcon;
      this.liveNationConcertsLogoGrey = p[3].liveNationConcertsLogoGrey;
      this.liveNationMediaAndSponsorshipsLogoGrey = p[4].liveNationMediaAndSponsorshipsLogoGrey;
      this.ticketmasterLogoGrey = p[5].ticketmasterLogoGrey;
      this.liveNationEntertainmentLogoGrey = p[6].liveNationEntertainmentLogoGrey;
    });
  }

}
