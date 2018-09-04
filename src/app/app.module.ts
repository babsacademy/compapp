import { AnnonceService } from './annonce.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HomeComponent,
    SearchComponent,
    ProductsComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [AnnonceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
