import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculatorComponent } from './road-trip-calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { EntryFormComponent } from './road-trip-calculator/entry-form/entry-form.component';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from './road-trip-calculator/calculator.service';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalculatorComponent,
    EntryFormComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot(AppReducer),
    AppRoutingModule, // if its not imported last youre gonna have a bad time
    
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
