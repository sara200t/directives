import {
  Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2,
  RendererStyleFlags2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {

  }

  ngOnInit() {
    this.backgroundColor  = this.defaultColor;
  }


  @HostListener('mouseenter') mouseover(eventdata: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow', RendererStyleFlags2.Important);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventdata: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', RendererStyleFlags2.DashCase);
    this.backgroundColor = this.defaultColor;
  }

}
