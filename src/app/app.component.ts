import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'testing-github-actions';
  users;

  constructor(private useService: UserService){

  }

  ngOnInit(){
     this.users = this.useService.getUsers();
  }
}
