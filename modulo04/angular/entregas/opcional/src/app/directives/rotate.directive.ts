import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appRotate]'
})
export class RotateDirective {


  private defaultStep: number = 10;
  private start: number = 0;

  @Input('appRotate') inputStart: string = '';
  @Input() step: string = '';

  constructor(private el: ElementRef) {

  }


  ngOnInit(): void {
    let startN: number = parseInt(this.inputStart);
    this.start = (startN || this.start);
    this.el.nativeElement.style.transform = 'rotate(' + this.start + 'deg)';
  }

  @HostListener('click', ['$event'])
    onClick(e: MouseEvent) {
      let stepN: number = parseInt(this.step);
      if (e.shiftKey) {
        this.start += ((stepN || this.defaultStep) * -1);
      }
      else {
        this.start += (stepN || this.defaultStep);
      }
      this.el.nativeElement!.style!.transform = 'rotate(' + this.start + 'deg)';
    }



}
