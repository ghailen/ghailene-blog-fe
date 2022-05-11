import {Injectable} from '@angular/core';
import {PostPayload} from "./post-payload";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {RssfeedPayload} from "./rssfeed-payload";

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient: HttpClient) {
  }

  addPost(postPayload: PostPayload) {
    return this.httpClient.post('http://localhost:8080/api/posts/', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>> {
    return this.httpClient.get<Array<PostPayload>>("http://localhost:8080/api/posts/all");
  }

  getPost(permaLink: Number): Observable<PostPayload> {
    return this.httpClient.get<PostPayload>('http://localhost:8080/api/posts/get/' + permaLink);
  }

  getPostSport(): Observable<PostPayload[]> {

    return this.httpClient.get<RssfeedPayload[]>('http://localhost:8080/api/rss/sports').pipe(map((data: RssfeedPayload[]) => {
      let objList: PostPayload[] = [];

      data.forEach(elem => {
        let descriptionWithMedia = elem.description;
        elem.mediaContent.forEach(m => {
          if (m.type == "image/jpeg" || m.type == "image/jpg") {
            descriptionWithMedia = "<br><img src='" + m.url + "' width='500px' height='300px'> <br>" + elem.description;
          } else if (m.type == "audio/mpeg") {
            descriptionWithMedia += elem.description + "<br> <audio controls autoplay> <source src='" + m.url + "' type='audio/mpeg'></audio>";
          }
          ;

        })

        let obj: PostPayload = {id: null, title: elem.title, content: descriptionWithMedia, userName: elem.author};
        console.log(obj.title)
        objList.push(obj);
      })
      objList.forEach(x => console.log("hahahahh", x.content));
      return objList;

    }))
  }


  getPostVideoGames(): Observable<PostPayload[]> {

    return this.httpClient.get<RssfeedPayload[]>('http://localhost:8080/api/rss/games').pipe(map((data: RssfeedPayload[]) => {
      let objList: PostPayload[] = [];

      data.forEach(elem => {
        let descriptionWithMedia = elem.description;
        elem.mediaContent.forEach(m => {
          if (m.type == "image/jpeg" || m.type == "image/jpg") {
            descriptionWithMedia = "<br><img src='" + m.url + "'  width='500px' height='300px' > <br> " + elem.description;
          } else if (m.type == "audio/mpeg") {
            descriptionWithMedia += elem.description + "<br> <audio controls autoplay> <source src='" + m.url + "' type='audio/mpeg'></audio>";
          }
          ;

        })

        let obj: PostPayload = {id: null, title: elem.title, content: descriptionWithMedia, userName: elem.author};
        console.log(obj.title)
        objList.push(obj);
      })
      objList.forEach(x => console.log("hahahahh", x.content));
      return objList;

    }))
  }

  getPostCars(): Observable<PostPayload[]> {

    return this.httpClient.get<RssfeedPayload[]>('http://localhost:8080/api/rss/cars').pipe(map((data: RssfeedPayload[]) => {
      let objList: PostPayload[] = [];

      data.forEach(elem => {
        let descriptionWithMedia = elem.description;
        elem.mediaContent.forEach(m => {
          if (m.type == "image/jpeg" || m.type == "image/jpg") {
            descriptionWithMedia = "<br><img src='" + m.url + "' width='500px' height='300px'> <br>" + elem.description;
          } else if (m.type == "audio/mpeg") {
            descriptionWithMedia += elem.description + "<br> <audio controls autoplay> <source src='" + m.url + "' type='audio/mpeg'></audio>";
          }
          ;

        })

        let obj: PostPayload = {id: null, title: elem.title, content: descriptionWithMedia, userName: elem.author};
        console.log(obj.title)
        objList.push(obj);
      })
      objList.forEach(x => console.log("hahahahh", x.content));
      return objList;

    }))
  }


  getPostMusic(): Observable<PostPayload[]> {

    return this.httpClient.get<RssfeedPayload[]>('http://localhost:8080/api/rss/musics').pipe(map((data: RssfeedPayload[]) => {
      let objList: PostPayload[] = [];

      data.forEach(elem => {
        let descriptionWithMedia = elem.description;
        elem.mediaContent.forEach(m => {
          if (m.type == "image/jpeg" || m.type == "image/jpg") {
            descriptionWithMedia = "<br><img src='" + m.url + "'  width='500px' height='300px'> <br>" + elem.description;
          } else if (m.type == "audio/mpeg") {
            descriptionWithMedia += elem.description + "<br> <audio controls autoplay> <source src='" + m.url + "' type='audio/mpeg'></audio>";
          }
          ;

        })

        let obj: PostPayload = {id: null, title: elem.title, content: descriptionWithMedia, userName: elem.author};
        console.log(obj.title)
        objList.push(obj);
      })
      objList.forEach(x => console.log("hahahahh", x.content));
      return objList;

    }))
  }

  getPostAnimes(): Observable<PostPayload[]> {

    return this.httpClient.get<RssfeedPayload[]>('http://localhost:8080/api/rss/animes').pipe(map((data: RssfeedPayload[]) => {
      let objList: PostPayload[] = [];

      data.forEach(elem => {
        let descriptionWithMedia = elem.description;
        elem.mediaContent.forEach(m => {
          if (m.type == "image/jpeg" || m.type == "image/jpg") {
            descriptionWithMedia = "<br><img src='" + m.url + "' width='500px' height='300px'> <br>" + elem.description;
          } else if (m.type == "audio/mpeg") {
            descriptionWithMedia += elem.description + "<br> <audio controls autoplay> <source src='" + m.url + "' type='audio/mpeg'></audio>";
          }
          ;

        })

        let obj: PostPayload = {id: null, title: elem.title, content: descriptionWithMedia, userName: elem.author};
        console.log(obj.title)
        objList.push(obj);
      })
      objList.forEach(x => console.log("hahahahh", x.content));
      return objList;

    }))
  }
}
