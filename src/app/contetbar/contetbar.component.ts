import { Component } from '@angular/core';

@Component({
  selector: 'app-contetbar',
  templateUrl: './contetbar.component.html',
  styleUrls: ['./contetbar.component.css']
})
export class ContetbarComponent {
  content_main_head ='Products';

  Products:any[]= [
  { 
    "id":1,
    "name":"Phone XL",
    "Description":"A large phone with one of the best screens.",
    "button":280
  },
  { 
    "id":2,
    "name":"Phone Mini",
    "Description":"A great phone with one of the best cameras.",
    "button":320
  },
  { 
    "id":3,
    "name":"Phone Standard",
    "Description":"",
    "button":200
  }
  ]
}

