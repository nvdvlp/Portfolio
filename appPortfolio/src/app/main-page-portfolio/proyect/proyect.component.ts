import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyect',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.css'
})
export class ProyectComponent {
  faFeather = faFeather;
}
