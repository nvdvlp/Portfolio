import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainViewComponent } from './main-page-portfolio/main-view/main-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appPortfolio';
}
