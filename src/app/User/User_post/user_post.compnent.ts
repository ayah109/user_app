import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {PostVM} from "../../User.service";
import { UserService, UserVM } from 'src/app/User.service';


@Component({
  selector: 'app-User_post',
  templateUrl: './user_post.component.html',
  styleUrls: ['./user_post.component.css']
})
export class user_postComponent {

  post: PostVM = { Title :"string",
    UserId:0,
    CreatDate :new Date(),
    CreateBy: 0 };

  constructor(public routering: Router, private obj: UserService) {
  }

  public PostList = new Array<any>();

  ngOnInit(): void {
    this.obj.getPost().subscribe(res => {
      this.PostList = res;
    });
  }


}
