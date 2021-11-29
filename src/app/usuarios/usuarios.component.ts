import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:any;
  rol='';
  constructor(private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.apolo.getCuenta();
    this.llenarTabla();
    this.rol = this.apolo.getCuenta().rol;
  }

  llenarTabla(){
    this.apolo.users().subscribe(
      datos=>{
        console.log(datos);
        this.usuarios = datos;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
