import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProyectComponent } from '../proyect/proyect.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [HeaderComponent, ProyectComponent, ContactComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {

}
