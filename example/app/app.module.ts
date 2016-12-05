import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

import {NgSpinningPreloader} from 'ng2-spinning-preloader';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [NgSpinningPreloader]
})

export class AppModule {}
