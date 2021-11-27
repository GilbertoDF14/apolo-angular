import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  miscursos:any;
  rol='';
  nombre='';
  descripcion='';
  profesor='';

  constructor(private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.apolo.getCuenta();
    this.llenarTabla();
    this.rol = this.apolo.getCuenta().rol;

  }

  llenarTabla(){
    this.apolo.miscursos().subscribe(
      datos=>{
        console.log(datos);
        this.miscursos = datos;
      },
      error=>{
        console.log(error);
      }
    )
  }

  agregar(){
    this.profesor=this.apolo.getCuenta().user
    this.apolo.addCurso(this.profesor,this.nombre,this.descripcion).subscribe(
      datos => {
        this.llenarmicurso();
        console.log(datos);
      }
    );
  }

  idc:any
  cr=0;
  al='';
  llenarmicurso(){
    this.al=this.apolo.getCuenta().user
    this.apolo.idcurso().subscribe(
      datos=>{
        this.idc=datos;
        //Aqui sacar el id para enviarlo
        this.cr=this.idc[0].id;
        this.idc.forEach(element => {
          'id'
        });
        //
        this.apolo.addMiCurso(this.cr,this.al).subscribe(
          datos => {
            this.llenarTabla();
          }
        );
      }
    )
  }

}
