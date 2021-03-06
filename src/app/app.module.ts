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
import { AddPageComponent } from './add-page/add-page.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatePageComponent } from './update-page/update-page.component';

// route paths needed to move between pages
const routes: Routes = [
  {path: 'display', component: DisplayPageComponent},
  {path: 'add', component: AddPageComponent},
  {path: 'update/:id', component: UpdatePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayPageComponent,
    AddPageComponent,
    UpdatePageComponent
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
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
