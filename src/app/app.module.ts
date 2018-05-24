import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterFaceComponent } from './inter-face/inter-face.component';
import { ClassesComponent } from './classes/classes.component';
import { DatatypeComponent } from './datatype/datatype.component';
import { DatatypeExportComponent } from './datatype-export/datatype-export.component';

@NgModule({
  declarations: [
    AppComponent,
    InterFaceComponent,
    ClassesComponent,
    DatatypeComponent,
    DatatypeExportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
