import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_services/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser:User;
  users:User[];
  constructor(private userService:UserService) {
    this.userService.getAll().subscribe(d=>this.users=d);
   }

  ngOnInit() {
    this.LoadAllUser();
  }
  deleteUser(id:string){
    this.userService.delete(id).subscribe(()=>this.LoadAllUser());
  }
  private LoadAllUser(){
    this.userService.getAll().subscribe(data=> this.users=data);
  }
}
