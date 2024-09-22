import { Component } from '@angular/core';
import { HeaderComponent } from "./header.component";
//decorator 
@Component({
  selector: 'app-root',
  standalone: true,  //selector
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'udemy-angular-0724';
}
