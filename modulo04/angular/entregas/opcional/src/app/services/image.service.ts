import { Injectable } from '@angular/core';

import { ImageEntity } from 'src/app/model/ImageEntity';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: ImageEntity[] = [];

  constructor() {

    this.images.push({id: '1', src: 'assets/atenas.jpeg', title: 'Atenas'});
    this.images.push({id: '2', src: 'assets/berlin.jpeg', title: 'Berlin'});
    this.images.push({id: '3', src: 'assets/dublin.jpeg', title: 'Dublin'});
    this.images.push({id: '4', src: 'assets/lisboa.jpeg', title: 'Lisboa'});
    this.images.push({id: '5', src: 'assets/londres.jpeg', title: 'Londres'});
    this.images.push({id: '6', src: 'assets/paris.jpeg', title: 'Paris'});
    this.images.push({id: '7', src: 'assets/praga.jpeg', title: 'Praga'});
    this.images.push({id: '8', src: 'assets/roma.jpeg', title: 'Roma'});

  }

  public getImage = (i: number): ImageEntity => this.images[i];

  public getAll = (): ImageEntity[] => this.images;

  public getSize = (): number => this.images.length;

}
