import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-NoteCard',
  templateUrl: './NoteCard.component.html',
  styleUrls: ['./NoteCard.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() title : string ;
  @Input() description : string;
  @Input() link: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator') truncator : ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText : ElementRef<HTMLElement>;
  @ViewChild('noteP',{static:true}) noteP: ElementRef<HTMLElement>;
  constructor(private renderer: Renderer2) { }
  ngOnInit() {}
  ngAfterViewInit(){
    let style = window.getComputedStyle(this.bodyText.nativeElement,null);
    let viewableHeight = parseInt(style.getPropertyValue("height"),10);

    if(this.noteP.nativeElement.scrollHeight > this.bodyText.nativeElement.clientHeight)
 { this.renderer.setStyle(this.truncator.nativeElement, 'display','block');}
 else{
  this.renderer.setStyle(this.truncator.nativeElement, 'display','none');
 }

}
onXButtonClick(){
  this.deleteEvent.emit();

}


}