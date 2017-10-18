import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[scrollTo]'
})
export class CarregarDirective {

  constructor(private elRef:ElementRef) {}
  
  // SCROLLTOP apos a VIEW de carregamento de DIGITAMENTO
  ngAfterViewInit() {
    this.elRef.nativeElement.scrollIntoView();
  }
}