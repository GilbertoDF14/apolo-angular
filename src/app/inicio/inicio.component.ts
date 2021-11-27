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

  constructor(private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.apolo.getCuenta();
    this.llenarTabla();
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

}
