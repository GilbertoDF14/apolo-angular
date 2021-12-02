import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editartema',
  templateUrl: './editartema.component.html',
  styleUrls: ['./editartema.component.css']
})
export class EditartemaComponent implements OnInit {
  //tema:any;
  id:number;
  t:string;
  p:string;
  d:string;

  private curso={id:0,nombre:'',profesor:'',descripcion:''};


  constructor(private rt:Router,private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.id=this.apolo.getCurso().id;
    this.t=this.apolo.getCurso().nombre;
    this.p=this.apolo.getCurso().profesor;
    this.d=this.apolo.getCurso().descripcion;
  }

  guardaCambios(){
    this.p=this.apolo.getCuenta().user;
    this.curso.id=this.id;
    this.curso.profesor=this.p;
    this.curso.nombre=this.t;
    this.curso.descripcion=this.d;
    this.apolo.editCurso(this.curso).subscribe(
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

}
