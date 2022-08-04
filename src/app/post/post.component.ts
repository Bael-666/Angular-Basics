import { Component, Input, EventEmitter, OutputDecorator, Output, OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, 
OnDestroy {
  //Custom property, aliases
  @Input('img') postImg = '' 
  //Custom events
  @Output() imgSelected = new EventEmitter<string>()

  constructor(){
    console.log("constructor() called", this.postImg)
  } 

  //#region Lifecycle hooks
  ngOnInit(){
    console.log("ngOnInit() called", this.postImg)
  }

  ngDoCheck(){
    console.log("ngDoCheck() called")
  }
  ngOnChanges() {
    console.log("ngOnChanges() called")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit() called")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked() called")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit() called")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked() called")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy() called")
  }
  //#endregion Lifecycle hooks
}
