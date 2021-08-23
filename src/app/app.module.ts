import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ExtratoComponent } from './extrato/extrato.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ExtratoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
