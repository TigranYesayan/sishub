export class Post {
  id: number;
  ownerUserId: number;
  body: string = "";
  parentId: number;
  closedDate: Date;
  creationDate: Date;
  postTypeId: number;
  score: number;
  tags: string = "";
  title: string = "";
}
