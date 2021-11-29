import { Component, OnInit } from '@angular/core';
import { ApoloService } from '../apolo.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-altuser',
  templateUrl: './altuser.component.html',
  styleUrls: ['./altuser.component.css']
})
export class AltuserComponent implements OnInit {

  constructor(private apolo:ApoloService, private msgbox:ToastrService) { }

  ngOnInit(): void {
  }

  

}
