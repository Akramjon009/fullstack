import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllComponent } from './component/get-all/get-all.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetAllWithNgbootstarapComponent } from './component/get-all-with-ngbootstarap/get-all-with-ngbootstarap.component';
import { GetAllWithAngularMaterialComponent } from './component/get-all-with-angular-material/get-all-with-angular-material.component';
import { CreateComponent } from './component/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllWithAngularMaterialComponent,
    GetAllComponent,
    NavbarComponent,
    GetAllWithNgbootstarapComponent,
    GetAllWithAngularMaterialComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
