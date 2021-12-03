import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificatemac',
  templateUrl: './modificatemac.component.html',
  styleUrls: ['./modificatemac.component.css']
})
export class ModificatemacComponent implements OnInit {

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

  guardarCambios(){
    this.apolo.modTema(this.id,this.nombre).subscribe(
      datos => {
        console.log(datos);
        this.msgbox.success("Modificacion correcta");
        this.rt.navigate(['/temascurso']);
      },
      error => {
        this.msgbox.error("Error al modificar");
        console.log(error);
      }
    );

  }

}
