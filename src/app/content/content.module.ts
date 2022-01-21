import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {ContentComponent} from "./content.component";
import {BrowserModule} from "@angular/platform-browser";
import {ContentRoutingModule} from "./content-routing.module";
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    ContentComponent,
    ProfileComponent
  ],
  imports: [
    ContentRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ContentModule { }
