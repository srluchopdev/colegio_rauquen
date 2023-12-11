import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
 declarations: [
    AppComponent
 ],
 imports: [
    BrowserModule,
    FullCalendarModule,
    FormsModule,
 ],

 providers: [],
 bootstrap: [AppComponent]
})

export class AppModule { }