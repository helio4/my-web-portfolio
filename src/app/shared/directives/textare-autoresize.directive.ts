import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[textarea-autoresize]',
})
export class TextareAutoresizeDirective {
  constructor(private elementRef: ElementRef) {}

  resize(): void {
    this.elementRef.nativeElement.style.height = '0';
    this.elementRef.nativeElement.style.height =
      this.elementRef.nativeElement.scrollHeight + 'px';
  }

  @HostListener(':input')
  onInput(): void {
    this.resize();
  }
}
