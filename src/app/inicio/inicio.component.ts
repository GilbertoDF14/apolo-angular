import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { Router } from '@angular/router';
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
  cursoEdit:any;
  micursoEdit:any;

  constructor(private rt:Router,private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.apolo.getCuenta();
    this.llenarTabla();
    this.llenarTablaPr();
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


  cursos:any;
  llenarTablaPr(){
    this.apolo.cursosPr().subscribe(
      datos=>{
        console.log(datos);
        this.cursos = datos;
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
        this.msgbox.success("Creado correctamente");
        this.llenarTablaPr();
        this.nombre='';
        this.descripcion='';
      }
    );
  }

  eliminarCursoAl(){
    this.apolo.delMiCurso(this.cursoEdit).subscribe(
      datos => {
        this.msgbox.success("Eliminado correctamente");
        this.llenarTabla();
      },
      error => {
        this.msgbox.error("Error al eliminar");
        console.log(error);
      }
    );
  }

  eliminarCursoPr(){
    this.apolo.delCurso(this.cursoEdit).subscribe(
      datos => {
        this.msgbox.success("Eliminado correctamente");
        this.llenarTablaPr();
      },
      error => {
        this.msgbox.error("Error al eliminar");
        console.log(error);
      }
    );
  }

  llenar(curso){
    this.cursoEdit = JSON.parse(JSON.stringify(curso));
    this.apolo.setCurso(this.cursoEdit.id,this.cursoEdit.nombre,this.cursoEdit.profesor,this.cursoEdit.descripcion);
  }

  editarCurso(curso){
    this.llenar(curso);
    this.rt.navigate(['/editcursos']);
  }

  listatemas(curso){
    this.llenar(curso);
    this.rt.navigate(['/temascurso']);
  }

  micursotEdit:any;
  listamitemas(curso){
    this.micursotEdit = JSON.parse(JSON.stringify(curso));
    this.apolo.setmiCurso(this.micursotEdit.id,this.micursotEdit.cursoid,this.micursotEdit.nombre,this.micursotEdit.profesor,this.micursotEdit.descripcion);
    this.rt.navigate(['/temascurso']);
    //this.micursoEdit = JSON.parse(JSON.stringify(curso));
    //this.apolo.setmiCurso(this.micursoEdit.id,this.micursoEdit.cursoid,this.micursoEdit.nombre,this.micursoEdit.profesor,this.micursoEdit.descripcion);
    //this.rt.navigate(['/delcursos']);
  }

  guardaCambios(){
    this.apolo.editCurso(this.cursoEdit).subscribe(
      datos => {
        console.log(datos);
        this.msgbox.success("Modificacion correcta");
        this.rt.navigate(['/inicio']);
      },
      error => {
        this.msgbox.error("Error al modificar");
        console.log(error);
      }
    );
  }

  deleteCurso(curso){
    this.cursoEdit = JSON.parse(JSON.stringify(curso));
    this.apolo.setCurso(this.cursoEdit.id,this.cursoEdit.nombre,this.cursoEdit.profesor,this.cursoEdit.descripcion);
    this.rt.navigate(['/delcursos']);
  }

  deleteMiCurso(curso){
    this.micursoEdit = JSON.parse(JSON.stringify(curso));
    this.apolo.setmiCurso(this.micursoEdit.id,this.micursoEdit.cursoid,this.micursoEdit.nombre,this.micursoEdit.profesor,this.micursoEdit.descripcion);
    this.rt.navigate(['/delcursos']);
  }

  idc:any
  cr=0;
  cc:BigInteger;
  al:String;
  llenarmicurso(){
    this.al=this.apolo.getCuenta().user
    this.apolo.cursos().subscribe(
      datos=>{
        this.idc=datos;
        for (let index = 0; index < this.idc.length; index++) {
          let cur = this.idc[index];
          if(index==this.idc.length-1){
              this.cc=cur.id;
              //console.log(this.cr);
              //console.log(this.al);
              this.actualizarmicurso(this.cc,this.al);
          }
        }
      }
    )
  }

  actualizarmicurso(curso,alumno){
    this.apolo.addMiCurso(curso,alumno).subscribe(
      datos => {
        this.llenarTabla();
      }
    );
  }

}
