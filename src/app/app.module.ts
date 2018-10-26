import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MainContentBodyComponent } from './main-content-body/main-content-body.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainContentBodyComponent,
    FooterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
