import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PostPayload} from "../post-payload";
import {AddPostService} from "../add-post.service";

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css']
})
export class VideoGamesComponent implements OnInit {

  posts: Observable<Array<PostPayload>>;
  objList: PostPayload[] = [];


  constructor(private postService: AddPostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
    this.postService.getPostVideoGames().subscribe(data => {
      this.objList = data;
    })
  }

  /*getGamesPost() {
    this.postService.getPostVideoGames().subscribe(data => {
      console.log("from home : ", data)
      this.objList = data;
      this.objList.forEach(x => console.log("from home x : ", x.title))

    })
  }*/

}
