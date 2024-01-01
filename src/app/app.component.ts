import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';

@Component({
  schemas: [NO_ERRORS_SCHEMA],
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CalendarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'colegio Rauquen';
 
  

}


