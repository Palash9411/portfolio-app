import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponentsComponent } from './material-components/material-components.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarModule } from './navbar/navbar.module';
import { SkillModule } from './my-skills/skill.module';
import { ContactModule } from './contact-info/contact.module';
import { AboutModule } from './about/about.module';
import { ExperienceModule } from './experience/experience.module';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from './material-components/material-components.module';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NavBarModule ,
    SkillModule,
    ContactModule,
    AboutModule,
    ExperienceModule,
    HttpClientModule,
    CommonModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
