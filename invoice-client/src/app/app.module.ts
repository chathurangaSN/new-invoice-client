import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ParentComponent } from './parent/parent.component';
import { Child2Component } from './parent/child2/child2.component';
import { ChildComponent } from './parent/child/child.component';
import { SonComponent } from './parent/son/son.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    LoyaltyComponent,
    InvoiceComponent,
    ReactiveComponent,
    ProfileEditorComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    SonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
