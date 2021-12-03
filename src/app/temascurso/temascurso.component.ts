import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-temascurso',
  templateUrl: './temascurso.component.html',
  styleUrls: ['./temascurso.component.css']
})
export class TemascursoComponent implements OnInit {

  rol='';
  temas:any;
  alumnos:any;
  id;
  t;
  p;
  d;
  ntema;
  temaEdit;
  constructor(private rt:Router,private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.rol = this.apolo.getCuenta().rol;
    this.id=this.apolo.getCurso().id;
    this.t=this.apolo.getCurso().nombre;
    this.p=this.apolo.getCurso().profesor;
    this.d=this.apolo.getCurso().descripcion;

    this.llenarlista();
    this.llenartemas();
  }

  llenartemas(){
    this.apolo.temas(this.id).subscribe(
      datos=>{
        console.log(datos);
        this.temas = datos;
      },
      error=>{
        console.log(error);
      }
    )
  }

  llenarlista(){
    this.apolo.lista(this.id).subscribe(
      datos=>{
        console.log(datos);
        this.alumnos = datos;
      },
      error=>{
        console.log(error);
      }
    )
  }

  agregar(){
    this.apolo.addtema(this.id,this.ntema).subscribe(
      datos => {
        this.msgbox.success("Creado correctamente");
        this.llenartemas();
        this.ntema='';
      }
    );
  }

  editTema(tema){
    this.temaEdit = JSON.parse(JSON.stringify(tema));
    this.apolo.setTema(this.temaEdit.id,this.temaEdit.nombre);
    this.rt.navigate(['/modtema']);    
  }

  llenar(tema){
    this.temaEdit = JSON.parse(JSON.stringify(tema));
    //this.apolo.setTema(this.temaEdit.id,this.temaEdit.curso,this.temaEdit.nombre);
  }

  delTema(tema){
    //this.llenar(tema);
    this.temaEdit = JSON.parse(JSON.stringify(tema));
    this.apolo.setTema(this.temaEdit.id,this.temaEdit.nombre);
    this.rt.navigate(['/deltema']);    
  }

}
