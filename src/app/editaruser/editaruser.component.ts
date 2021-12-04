import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editaruser',
  templateUrl: './editaruser.component.html',
  styleUrls: ['./editaruser.component.css']
})
export class EditaruserComponent implements OnInit {

  user;
  pass;
  nombre;
  apellidos;
  rol;

  constructor(private rt:Router,private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.user=this.apolo.getCuenta().user;
    this.pass=this.apolo.getPass();
    this.nombre=this.apolo.getCuenta().nombre;
    this.apellidos=this.apolo.getCuenta().apellidos;
    this.rol=this.apolo.getCuenta().rol;
  }
  edit(){
    this.apolo.editUser(this.user,this.pass,this.nombre,this.apellidos,this.rol).subscribe(
      datos => {
        console.log(datos);
        this.msgbox.success("Modificaste tus datos correctamente");
        this.rt.navigate(['/myprofile']);
      },
      error => {
        this.msgbox.error("Error al modificar");
        console.log(error);
      }
    );
  }

}
