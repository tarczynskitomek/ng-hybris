import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router/src/router_module";
import { Routes } from "@angular/router/src/config";
import { AppComponent } from "../app.component";

const routes: Routes = [
  {path: '', redirectTo: '/'},
  {path: '/', component: AppComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
