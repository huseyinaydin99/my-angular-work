import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: BlogPost;

  constructor(private truncatePipe: TruncatePipe) {
    //this.post.summary = this.truncatePipe.transform(this.post.summary,30);
  }

  ngOnInit() {
    /*this.title = "Blog Title";
    this.summary = "Blog Summary";*/
  }

  expandAll(){
    console.log("2. expandall çalıştı");
    this.post.summary = this.truncatePipe.transform(this.post.summary,50);
  }

  toggleFav(){
    this.post.isFav = !this.post.isFav;
  }

}
