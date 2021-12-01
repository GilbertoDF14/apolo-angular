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
  tema:any;
  id;
  t;
  p;
  d;
  constructor(private rt:Router,private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.id=this.apolo.getCurso().id;
    this.t=this.apolo.getCurso().nombre;
    this.p=this.apolo.getCurso().profesor;
    this.d=this.apolo.getCurso().descripcion;
  }

  guardaCambios(){
    this.apolo.editCurso(this.id,this.p,this.t,this.d).subscribe(
      datos => {
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
