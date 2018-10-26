import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class StatsBannerService {
  statsBanners: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.statsBanners = database.list('statsBanners');
  }

  getStatsBanners() {
    return this.statsBanners;
  }
}
