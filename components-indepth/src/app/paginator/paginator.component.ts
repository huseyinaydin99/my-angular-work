import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfPages: Number;
  @Output() pageNumberClick = new EventEmitter<Number>();
  pages: Number[];
  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.numberOfPages);
  }

  pageNumberClicked(pageNumber){
    this.pageNumberClick.emit(pageNumber);
  }

}
