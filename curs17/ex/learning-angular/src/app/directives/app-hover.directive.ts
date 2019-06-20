import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from "@angular/core";

@Directive({
    selector: '[appHover]'
})

export class appHoverDirective {

    @HostBinding('class.custom-class-hover')
    isHover = false;

    constructor(private elementReference: ElementRef, private renderer: Renderer2) {
        
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        console.log('Mouse enter');
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