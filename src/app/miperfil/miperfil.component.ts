import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent implements OnInit {

  user;
  nombre;
  ape;
  constructor(private rt:Router,private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.user=this.apolo.getCuenta().user;
    this.nombre=this.apolo.getCuenta().nombre;
    this.ape=this.apolo.getCuenta().apellidos;
  }

  eliminarUs(){
    this.apolo.delUser(this.user).subscribe(
      datos => {
        this.msgbox.success("Tu perfil se ha eliminado correctamente");
        this.rt.navigate(['/login']);
      },
      error => {
        this.msgbox.error("Error al eliminar");
        console.log(error);
      }
    );
  }

}
