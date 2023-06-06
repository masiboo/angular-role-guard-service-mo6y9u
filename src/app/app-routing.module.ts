// import { ViewCustomersComponent } from "./components/view-customers/view-customers.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EveryoneComponent } from "./components/everyone/everyone.component";

const routes: Routes = [
  {
    path: "",
    component: EveryoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
