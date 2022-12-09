import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(private el : ElementRef) { }

  ngAfterViewInit(): void {
     this.el.nativeElement.focus();
  }

  ngOnInit(): void {
  }

}
