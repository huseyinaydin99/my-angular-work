import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('color') color = 'yellow';
  constructor(private element: ElementRef) {
    console.log(element);
    //element.nativeElement.style.backgroundColor = 'yellow'; //bu elementden style'ı değiştirebiliyoruz
  }

  @HostListener('mouseenter') addHighligth() {
    this.element.nativeElement.style.backgroundColor = this.color; //bu elementden style'ı değiştirebiliyoruz
  }

  @HostListener('mouseleave') removeHighligth() {
    this.element.nativeElement.style.backgroundColor = null; //bu elementden style'ı değiştirebiliyoruz
  }

}
