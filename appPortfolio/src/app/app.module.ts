import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainPagePortfolioModule } from './main-page-portfolio/main-page-portfolio.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
    ],
    imports: [
      BrowserModule,
      MainPagePortfolioModule,
      FontAwesomeModule
    ],
    providers: [], 
    bootstrap: [] 
  })
  export class AppModule { }
  