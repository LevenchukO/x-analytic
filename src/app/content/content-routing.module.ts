import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile/profile.component";
import {ContentComponent} from "./content.component";


const routes: Routes = [

  { path: '', component: ContentComponent, children: [
      { path: '', component: ProfileComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
