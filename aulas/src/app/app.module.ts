import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ReadMeGenComponent } from './read-me-gen/read-me-gen.component';
import { HomeComponent } from './home/home.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { FormsModule } from '@angular/forms';
import { EvAndRefComponent } from './ev-and-ref/ev-and-ref.component';
import { Expirementsv2Component } from './expirementsv2/expirementsv2.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalComponent } from './animal/animal.component';
import { CoockiesComponent } from './coockies/coockies.component';
import { AnimalReaderComponent } from './animal-list/animal-reader/animal-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CalculadoraComponent,
    ReadMeGenComponent,
    HomeComponent,
    ExperimentsComponent,
    EvAndRefComponent,
    Expirementsv2Component,
    AnimalListComponent,
    AnimalComponent,
    CoockiesComponent,
    AnimalReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
