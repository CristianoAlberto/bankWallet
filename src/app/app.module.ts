import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainViewComponent } from './main-view/main-view.component';
import { CamaraComponent } from './camara/camara.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { InformationComponent } from './information/information.component';
import { MoreComponent } from './more/more.component';
import { ActivityComponent } from './activity/activity.component';
import { BannerComponent } from './banner/banner.component';
import { CardsCarouselComponent } from './cards-carousel/cards-carousel.component';

import { register as registerSwiperElements } from 'swiper/element/bundle';

registerSwiperElements();

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    MainViewComponent,
    CamaraComponent,
    NavbarComponent,
    DefinitionsComponent,
    InformationComponent,
    MoreComponent,
    ActivityComponent,
    BannerComponent,
    CardsCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    WebcamModule,
    MatIconModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
