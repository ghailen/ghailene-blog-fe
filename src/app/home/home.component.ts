import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PostPayload} from "../post-payload";
import {AddPostService} from "../add-post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Observable<Array<PostPayload>>;
  objList: PostPayload[] = [];

  constructor(private postService: AddPostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();

    this.postService.getPostSport().subscribe(data => {
      data.forEach(elem => {
        this.objList.push(elem)
      })

    })
    this.postService.getPostAnimes().subscribe(data => {
      data.forEach(elem => {
        this.objList.push(elem)
      })


    })
    this.postService.getPostVideoGames().subscribe(data => {
      data.forEach(elem => {
        this.objList.push(elem)
      })

    })
    this.postService.getPostCars().subscribe(data => {
      data.forEach(elem => {
        this.objList.push(elem)
      })

    })

    this.postService.getPostMusic().subscribe(data => {
      data.forEach(elem => {
        this.objList.push(elem)
      })

    })
  }


}
