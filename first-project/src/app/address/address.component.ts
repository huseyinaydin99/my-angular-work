import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  
  eee = 'qwerty';
  @Input('user') user : User;
  constructor() {
  }

  ngOnInit() {
    
  }

}
