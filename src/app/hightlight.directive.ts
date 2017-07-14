import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
   }

}
