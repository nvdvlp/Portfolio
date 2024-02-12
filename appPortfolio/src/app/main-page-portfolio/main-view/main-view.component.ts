import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProyectComponent } from '../proyect/proyect.component';
import { ContactComponent } from '../contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [HeaderComponent, ProyectComponent, ContactComponent, FontAwesomeModule],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  faArrowRight = faArrowRight;
}
