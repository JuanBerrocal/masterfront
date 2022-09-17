import { Component, OnInit, Input } from '@angular/core';

import {ImageEntity} from 'src/app/model/ImageEntity';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit {

  @Input() image: ImageEntity = {id: '', src: '', title: ''};
  @Input() height: number = 200;

  rotated: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
