import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ImageService]
})
export class FooterComponent implements OnInit {

  images : FirebaseListObservable<any[]>;
  liveNationLogoFooter: string;
  ticketmasterLogoFooter: string;
  liveNationMediaAndSponsorshipsLogoFooter: string;
  houseOfBluesLogoFooter: string;
  liveNationProductionsLogoFooter: string;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    this.images.subscribe(p => {
      this.liveNationLogoFooter = p[7].liveNationLogoFooter;
      this.ticketmasterLogoFooter = p[8].ticketmasterLogoFooter;
      this.liveNationMediaAndSponsorshipsLogoFooter = p[9].liveNationMediaAndSponsorshipsLogoFooter;
      this.houseOfBluesLogoFooter = p[10].houseOfBluesLogoFooter;
      this.liveNationProductionsLogoFooter = p[11].liveNationProductionsLogoFooter;
    });
  }

}
