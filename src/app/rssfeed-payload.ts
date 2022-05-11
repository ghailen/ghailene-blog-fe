import {mediaContentPayload} from "./media-content-payload";

export class RssfeedPayload {
  title: string;
  publishedDate: any;
  link: string;
  author: string;
  description: string;
  mediaContent: mediaContentPayload[];
}
