import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user="";
  pass="";

  login(){
    this.apolo.login(this.user, this.pass).subscribe(resp => {
      console.log(resp);
      this.respuesta(resp);
      this.rt.navigate(['/inicio']);
      this.msgbox.success("Bienvenido "+this.user+" a Apolo :) !!");
    }, error => {
      console.log(error);
      this.msgbox.error("No se ha podido iniciar sesión")
    })
    //this.rt.navigate(['/inicio']);
  }

  respuesta(datos:any){
    this.apolo.setCuenta(datos['user']['user'],datos['user']['nombre'],datos['user']['apellidos'],datos['user']['rol'],datos['token']);
    console.log("user:"+datos['user']['user']);
  }

  constructor(private rt:Router, private apolo: ApoloService, 
    private msgbox:ToastrService) { }

  ngOnInit(): void {
  }

}
