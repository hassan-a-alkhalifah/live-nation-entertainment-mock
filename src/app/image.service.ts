import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ImageService {
  images: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.images = database.list('images');
  }

  getImages() {
    return this.images;
  }
}
