import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deltema',
  templateUrl: './deltema.component.html',
  styleUrls: ['./deltema.component.css']
})
export class DeltemaComponent implements OnInit {

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

  borrar(){
    console.log(this.id);
    this.apolo.delCurso(this.id).subscribe(
      datos => {
        this.msgbox.success("Eliminado correctamente");
        this.rt.navigate(['/inicio']);
      },
      error => {
        this.msgbox.error("Error al eliminar");
        console.log(error);
      }
    );
  }
}
