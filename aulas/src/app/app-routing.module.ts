import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { HomeComponent } from './home/home.component';
import { ReadMeGenComponent } from './read-me-gen/read-me-gen.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  { path: "home", component: HomeComponent },
  { path: "calculator", component: CalculadoraComponent, },
  { path: "readMeGen", component: ReadMeGenComponent, },
  { path: "experiments", component: ExperimentsComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
