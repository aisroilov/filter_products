import { Component } from '@angular/core';
import { JsonService } from './services/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  data!: string;
  products!: string[];  

  constructor(
    private jsonService : JsonService
  ) { }

  ngOnInit(){
    this.jsonService.getJSON().subscribe(data => {
          // console.log(data);
          this.products = data;
      });
  }  
}

export interface Product {
  name: String;
  category: String;
  price: number;
} 