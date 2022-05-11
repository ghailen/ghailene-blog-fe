import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PostPayload} from "../post-payload";
import {AddPostService} from "../add-post.service";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  posts: Observable<Array<PostPayload>>;
  objList: PostPayload[]=[];

  constructor(private postService: AddPostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
    // this.getSportPost();
    this.postService.getPostSport().subscribe(data => {
      this.objList=data;
      this.objList.forEach( x=> console.log("from home x : ",x.title))
      console.log("dddd",data)
    })
  }

  getSportPost() {


    //this.posts =
    this.postService.getPostSport().subscribe(data => {console.log("from home : ",data)
      this.objList=data;
      this.objList.forEach( x=> console.log("from home x : ",x.title))

    })
  }

}
