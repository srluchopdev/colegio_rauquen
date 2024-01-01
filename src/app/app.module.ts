import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EventoComponent } from './Evento/Evento.component';
import { EventosService } from './Evento/EventosService.service';
import { CalendarModule } from 'angular-calendar';

@NgModule({
 declarations: [	
    AppComponent,
      EventoComponent
   ],
 imports: [
    BrowserModule,
    FormsModule,
    CalendarModule
 ],

 providers: [EventosService],
 bootstrap: [AppComponent]
})

export class AppModule { }