import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deluser',
  templateUrl: './deluser.component.html',
  styleUrls: ['./deluser.component.css']
})
export class DeluserComponent implements OnInit {

  user;
  nombre;
  apellidos;
  rol;

  constructor(private rt:Router,private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.user=this.apolo.getUser().user;
    this.nombre=this.apolo.getUser().nombre;
    this.apellidos=this.apolo.getUser().apellidos;
    this.rol=this.apolo.getUser().rol;
  }

  borrar(){
    if(this.rol=='U'){
      this.apolo.delUser(this.user).subscribe(
        datos => {
          this.msgbox.success("Eliminado correctamente");
          this.rt.navigate(['/users']);
        },
        error => {
          this.msgbox.error("Error al eliminar");
          console.log(error);
        }
      );
    }else{
      this.msgbox.error("Error al eliminar, no puede eliminar a un ADMIN");
    }
  }

}
