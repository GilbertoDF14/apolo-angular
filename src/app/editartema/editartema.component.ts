import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
    this.id=this.apolo.getCurso().id;
    this.t=this.apolo.getCurso().nombre;
    this.p=this.apolo.getCurso().profesor;
    this.d=this.apolo.getCurso().descripcion;
  }

}
