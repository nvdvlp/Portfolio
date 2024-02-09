import { Routes } from '@angular/router';
import { MainViewComponent } from './main-page-portfolio/main-view/main-view.component';
import { HeaderComponent } from './main-page-portfolio/header/header.component';
import { ProyectComponent } from './main-page-portfolio/proyect/proyect.component';
import { ContactComponent } from './main-page-portfolio/contact/contact.component';

export const routes: Routes = [
    { path: '', component: MainViewComponent },
    { path: 'Header', component: HeaderComponent },
    { path: 'Proyect', component: ProyectComponent },
    { path: 'Contact', component: ContactComponent },
];
