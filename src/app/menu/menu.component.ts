import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user='';
  rol='';

  constructor(private apolo:ApoloService) { }

  ngOnInit(): void {
    this.user=this.apolo.getCuenta().user;
    this.rol = this.apolo.getCuenta().rol;
  }

}
