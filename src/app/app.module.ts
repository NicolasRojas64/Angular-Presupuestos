import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { ingEgrService } from './services/ingEgr.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [ingEgrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
