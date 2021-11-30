import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {
  cursos:any;
  rol='';
  alumno='';
  constructor(private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.apolo.getCuenta();
    this.llenarTabla();
    this.rol = this.apolo.getCuenta().rol;
    this.alumno = this.apolo.getCuenta().user;
  }

  llenarTabla(){
    this.apolo.cursos().subscribe(
      datos=>{
        console.log(datos);
        this.cursos = datos;
      },
      error=>{
        console.log(error);
      }
    )
  }

  cursoEdit:any;
  cu;
  tomartema(curso){
    this.cursoEdit = JSON.parse(JSON.stringify(curso));
    this.cu=this.cursoEdit.id;
    console.log(this.cursoEdit);
    this.addMiCurso();
  }

  addMiCurso(){
    this.apolo.addMiCurso(this.cu,this.alumno).subscribe(
      datos => {
        this.msgbox.success("Te has inscrito correctamente a "+this.cursoEdit.nombre);
      }
    );
  }

}
