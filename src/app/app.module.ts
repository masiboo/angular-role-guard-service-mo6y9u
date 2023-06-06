import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';

import { EveryoneComponent } from './components/everyone/everyone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRolesService } from './user-roles.service';
import { RoleGuardService } from './role-guard.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule ],
  declarations: [ AppComponent, EveryoneComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserRolesService, RoleGuardService]
})
export class AppModule { }
