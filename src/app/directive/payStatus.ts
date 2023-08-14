import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appConditionalColor]'
})
export class ConditionalColorDirective {
  @Input('appConditionalColor') set appConditionalColor(value: boolean) {
    const color = value ? 'green' : 'red';
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
