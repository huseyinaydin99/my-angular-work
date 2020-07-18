import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  currentPage;
  @ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>; //blog post tile componentlerin sorgu listesi kaç tane varsa hepsini elinde tutar
  constructor(private blogDataService: BlogDataService) {

  }

  ngOnInit() {
    /*let blogPost1 = new BlogPost("Blog Post 1","Summary 1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    let blogPost2 = new BlogPost("Blog Post 2","Summary 2 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    let blogPost3 = new BlogPost("Blog Post 3","Summary 3");*/
    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getData();
  }

  updatePage(newPage) {
    console.log("update page çalıştı page: " + newPage);
    this.currentPage = newPage;

  }

  expandAll() {
    console.log("1. expandall çalıştı");
    this.blogPostTileComponents.forEach(e => e.expandAll()); //burada kaç tane blogposttilecomponent varsa onların içine eriştik
  }

  favAll() {
    //this.blogPosts[this.currentPage].forEach(post=>post.isFav=true);
    this.blogPosts[this.currentPage] =
      this.blogPosts[this.currentPage].map(post => ({
        title: post.title,
        summary: post.summary,
        isFav: true
      }));
  }

}
