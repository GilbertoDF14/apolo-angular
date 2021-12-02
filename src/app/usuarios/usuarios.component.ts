import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:any;
  rol='';
  userEdit:any;

  constructor(private rt:Router,private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.apolo.getCuenta();
    this.llenarTabla();
    this.rol = this.apolo.getCuenta().rol;
  }

  delUser(user){
    this.userEdit= JSON.parse(JSON.stringify(user));
    this.apolo.setUser(this.userEdit.user,this.userEdit.nombre,this.userEdit.apellidos,this.userEdit.rol);
    this.rt.navigate(['/deluser']);
  }

  editUser(user){
    this.userEdit= JSON.parse(JSON.stringify(user));
    this.apolo.setUser(this.userEdit.user,this.userEdit.nombre,this.userEdit.apellidos,this.userEdit.rol);
    this.rt.navigate(['/edituser']);
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
