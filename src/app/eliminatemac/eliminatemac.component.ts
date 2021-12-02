import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-eliminatemac',
  templateUrl: './eliminatemac.component.html',
  styleUrls: ['./eliminatemac.component.css']
})
export class EliminatemacComponent implements OnInit {

  rol='';
  id;
  curso;
  nombre;
  constructor(private rt:Router,private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.rol=this.apolo.getCuenta().rol;
    this.id=this.apolo.getTema().id;
    this.nombre=this.apolo.getTema().nombre;
  }

  borrar(){
    this.apolo.delTema(this.id).subscribe(
      datos => {
        this.msgbox.success("Eliminado correctamente");
        this.rt.navigate(['/temascurso']);
      },
      error => {
        this.msgbox.error("Error al eliminar");
        console.log(error);
      }
    );
  }

}
