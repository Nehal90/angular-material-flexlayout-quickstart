//Angular Modules

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router';

// Components
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';

// UI Libraries
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule,
         MatSidenavModule,
         MatIconModule,
         MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
