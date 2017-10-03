import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[scrollTo]'
})
export class CarregarDirective {

  constructor(private elRef:ElementRef) {}
  
  ngAfterViewInit() {
    this.elRef.nativeElement.scrollIntoView();
  }
}