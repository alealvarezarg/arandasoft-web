import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from '../model/login-model';
import { User } from '../model/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public loginForm: FormGroup;
  public usernameControl: FormControl;
  public passwordControl: FormControl;
  public logged: boolean;
  public isVisitante: boolean;
  public isEditor: boolean;
  public isAsistente: boolean;
  public isAdministrador: boolean;

  constructor(private loginService: LoginService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.usernameControl = new FormControl('');
    this.passwordControl = new FormControl('');
    this.loginForm= new FormGroup({
      username: this.usernameControl,
      password: this.passwordControl,
    });
    this.logged = false;
  }

  login(){
    let credentials: LoginModel = {
      username: this.usernameControl.value,
      password: this.passwordControl.value
    };
    this.loginService.loginByCredentials(credentials)
      .subscribe( (data) => {
        this.toastr.success("Login exitoso");
        this.user = data;
        this.loginService.activeLogin = data;
        this.logged = true;
        this.isAdministrador = this.user.rol.rolname === "Administrador";
        this.isAsistente = this.user.rol.rolname === "Asistente";
        this.isEditor = this.user.rol.rolname === "Editor";
        this.isVisitante = this.user.rol.rolname === "Visitante";
      },
      (error) => {
        this.toastr.error("Usuario y/o password invalidos");
        console.info(error);
      });
      this.loginForm.reset();
  }

  logout(){
    this.loginService.activeLogin = null;
    this.user = null;
    this.logged = false;
    this.loginForm.reset();
    this.isAdministrador = false;
    this.isAsistente = false;
    this.isEditor = false;
    this.isVisitante = false;
  }

}
