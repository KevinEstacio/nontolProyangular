import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { from } from 'rxjs';
import { PostComponent } from './components/right/post/post.component';
import { PaisComponent } from './components/right/pais/pais.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LeftComponent,
    RightComponent,
    PostComponent,
    PaisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
