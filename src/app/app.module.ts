import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


import 'hammerjs';

import { NgxGaugeModule } from 'ngx-gauge';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { ReadynodeComponent } from './readynode/readynode.component';


import { HybridhostComponent } from './hybridhost/hybridhost.component';
import { AllflashhostComponent } from './allflashhost/allflashhost.component';
import { AdvancedComponent } from './advanced/advanced.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadynodeComponent,
    HybridhostComponent,
    AllflashhostComponent,
    AdvancedComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule,
    NgxGaugeModule,
    ChartsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
