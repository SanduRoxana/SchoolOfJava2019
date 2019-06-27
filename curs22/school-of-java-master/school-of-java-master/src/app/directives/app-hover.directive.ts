import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  @HostBinding('class.custom-class-hover')
  isHover = false;

  @Input()
  hoverDepth: number;

  constructor(private elementReference: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('Mouse enter ');
    this.renderer.addClass(this.elementReference.nativeElement, 'mat-elevation-z4');
    this.isHover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('Mouse leave');
    this.renderer.removeClass(this.elementReference.nativeElement, 'mat-elevation-z4');
    this.isHover = false;
  }

}
