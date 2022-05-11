import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PostPayload} from "../post-payload";
import {AddPostService} from "../add-post.service";

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  posts: Observable<Array<PostPayload>>;
  objList: PostPayload[]=[];

  constructor(private postService: AddPostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
    this.postService.getPostMusic().subscribe(data => {
      this.objList=data;

    })
  }

  /* getCarsPost() {

     this.postService.getPostCars().subscribe(data => {console.log("from home : ",data)
       this.objList=data;
       this.objList.forEach( x=> console.log("from home x : ",x.title))

     })
   }*/
}
