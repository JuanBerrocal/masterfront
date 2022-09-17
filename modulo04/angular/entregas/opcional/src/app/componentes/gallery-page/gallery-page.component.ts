import { Component, Input, OnInit } from '@angular/core';

import{ ImageEntity } from 'src/app/model/ImageEntity';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  private current: number = 0;
  private height = 200;

  constructor(public imageList: ImageService) { }

  ngOnInit(): void {
  }

  getAll = (): ImageEntity[] => this.imageList.getAll();

  getImage = (i: number): ImageEntity => this.imageList.getImage(i);

  getCurrentImage = (): ImageEntity => this.imageList.getImage(this.current);

  getHeight = () => this.height;

  getCurrentIndex = (): number => this.current;

  setNextImage = () => {this.current = (this.current < (this.imageList.getSize() - 1)) ? ++this.current : this.current;}

  setPrevImage = () => {this.current = (this.current > 0) ? --this.current : this.current;}

  setCurrentImage = (index: number) => {this.current = (index >= 0) && (index < (this.imageList.getSize())) ? index : this.current }

  goFirstImage = () => {this.current = 0;}

  enlarge = () => {this.height += 5;}

  diminish = () => {this.height -= 5;}

  isLastImage = ():boolean => this.current >= (this.imageList.getSize() - 1)

  isFirstImage = (): boolean => this.current <= 0

}
