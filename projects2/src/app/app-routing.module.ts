import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './component/get-all/get-all.component';
import { GetAllWithAngularMaterialComponent } from './component/get-all-with-angular-material/get-all-with-angular-material.component';
import { GetAllWithNgbootstarapComponent } from './component/get-all-with-ngbootstarap/get-all-with-ngbootstarap.component';
import { CreateComponent } from './component/create/create.component';

const routes: Routes = [
  { path: 'Bootstrap', component: GetAllComponent },
  { path: 'ng', component: GetAllWithNgbootstarapComponent },
  { path: 'Angular', component: GetAllWithAngularMaterialComponent },
  { path: 'Create', component:CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
