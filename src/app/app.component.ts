import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomtext = faker.lorem.sentence();
  onchangetext(text:string){
    console.log(text);
    

  }
}
