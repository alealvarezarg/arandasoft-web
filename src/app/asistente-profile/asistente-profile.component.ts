import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-asistente-profile',
  templateUrl: './asistente-profile.component.html',
  styleUrls: ['./asistente-profile.component.css']
})
export class AsistenteProfileComponent implements OnInit {

  public userList: any;
  public searchForm: FormGroup;
  public nameControl: FormControl;
  public rolControl: FormControl;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.nameControl = new FormControl('');
    this.rolControl = new FormControl('');
    this.searchForm= new FormGroup({
      name: this.nameControl,
      rol: this.rolControl,
    });
  }

  search(){
    this.userService.search(this.nameControl.value, this.rolControl.value)
      .subscribe( (data) => {
        this.userList = data;
      });
  }

}
