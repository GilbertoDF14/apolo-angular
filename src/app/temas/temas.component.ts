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
  constructor(private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.apolo.getCuenta();
    this.llenarTabla();
    this.rol = this.apolo.getCuenta().rol;
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

}
