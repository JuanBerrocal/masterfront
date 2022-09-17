import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { GalleryPageComponent } from '../gallery-page/gallery-page.component';
import { ImageEntity } from 'src/app/model/ImageEntity';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  @Input() gallery: GalleryPageComponent|null = null;

  start: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect = (index: number) => {
    this.gallery!.setCurrentImage(index);
  }

  incStart = () => {
    let nextStart = this.start + 3;
    let size = this.gallery!.imageList.getSize();

    this.start = (nextStart <= size - 3) ? this.start + 3 :  size - 3;
  }

  decStart = () => {
    let nextStart = this.start - 3;
    let size = this.gallery!.imageList.getSize();

    this.start = (nextStart >= 0) ? this.start - 3 : 0;
  }

}
