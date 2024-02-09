import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { HeaderComponent } from './header/header.component';
import { ProyectComponent } from './proyect/proyect.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MainViewComponent,
    HeaderComponent,
    ProyectComponent, 
    ContactComponent
  ]
})
export class MainPagePortfolioModule { }
