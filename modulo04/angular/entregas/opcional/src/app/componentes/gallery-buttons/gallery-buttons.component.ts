import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { GalleryPageComponent } from '../gallery-page/gallery-page.component';

@Component({
  selector: 'app-gallery-buttons',
  templateUrl: './gallery-buttons.component.html',
  styleUrls: ['./gallery-buttons.component.scss']
})
export class GalleryButtonsComponent implements OnInit, AfterContentInit {

  @Input() gallery: GalleryPageComponent|null = null;

  prevBtnDisabled: boolean = false;
  nextBtnDisabled: boolean = false;
  isPlaying: boolean = false;
  private interval: any = null;

  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    this.updateButtons();
  }

  setNextImage = () => {
    this.gallery!.setNextImage();
    this.updateButtons();
  }

  setPrevImage = () => {
    this.gallery!.setPrevImage();
    this.updateButtons();
  }

  private updateButtons = () => {
    this.prevBtnDisabled = this.gallery!.isFirstImage();
    this.nextBtnDisabled = this.gallery!.isLastImage();
  }

  play = () => {
    this.interval = setInterval(this.doPlay, 2000);
    this.isPlaying = true;
  }

  stop = () => {
    clearInterval(this.interval);
    this.isPlaying = false;
  }

  private doPlay = () => {
    if (this.gallery!.isLastImage()) {
      this.gallery!.goFirstImage();
    }
    else {
      this.gallery!.setNextImage();
    }
  }

}
