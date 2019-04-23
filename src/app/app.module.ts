import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DisplayPageComponent } from './display-page/display-page.component';
import { StockService } from './services/stock.service';
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSelectModule} from '@angular/material';

//use this component to do all routing seperate of the app.module.ts
const routes: Routes = [
  {path: 'display', component: DisplayPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DisplayPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
