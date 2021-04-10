import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <main>
  <div class="container-fluid px-0" style="overflow:hidden;">
    <router-outlet></router-outlet>
  </div>
  </main>
  
  `, 
  
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'road-trip-calculator';
}
