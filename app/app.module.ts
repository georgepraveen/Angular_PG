import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {BookComponent} from './app.bookcomponent';
import {BookDetails} from './book.details';


@NgModule({
  imports: [
    BrowserModule
    
  ],
  declarations: [
    AppComponent,
    BookComponent,
    BookDetails
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
