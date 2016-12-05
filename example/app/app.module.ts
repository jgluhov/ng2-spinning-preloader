import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

import {NgSpinningPreloaderService} from 'ng2-spinning-preloader';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [NgSpinningPreloaderService]
})

export class AppModule {}
