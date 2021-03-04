import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(localStorage.getItem('usuario')){
      console.log('logueado')
      this.router.navigate(['./productos'])
    }else{
      localStorage.setItem('usuario','1')
      this.router.navigate(['productos'])
    }
  }

}
