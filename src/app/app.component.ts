import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponentComponent } from "./Components/main-component/main-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
