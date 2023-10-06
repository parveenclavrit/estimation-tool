import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent  implements OnInit {

  showPassword: boolean = false;
  username : any;
  password: any;
  input: any;
  constructor() { }

  ngOnInit() {}
  login(){

  }

  toggleShow(){
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }


}
