import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    let li = this.el.nativeElement;
    // tslint:disable-next-line:max-line-length
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/icons8-checked-24.png)');
  }

}
