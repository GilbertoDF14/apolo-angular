import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-altuser',
  templateUrl: './altuser.component.html',
  styleUrls: ['./altuser.component.css']
})
export class AltuserComponent implements OnInit {

  user='';
  pass='';
  nombre='';
  apellidos='';
  rol='';

  constructor(private rt:Router,private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
  }

 

  agregar(){
    if(this.rol=='U' || this.rol=='A'){
    this.apolo.addUser(this.user,this.pass,this.nombre,this.apellidos,this.rol).subscribe(
      datos => {
        this.msgbox.success("Creado correctamente");
        this.rt.navigate(['/users']);
      }
    );
    }else{
      alert("ERROR, debe ingresar U para usuarios y A para admins");
    }
  }
  

}
