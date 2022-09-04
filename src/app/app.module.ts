import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './home/home.component';
import { InspectElementComponent } from './inspect-element/inspect-element.component';
import { OurDevicesComponent } from './our-devices/our-devices.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TestComponent } from './test/test.component';
import { WaterLeaksComponent } from './water-leaks/water-leaks.component';
import { AzelComponent } from './azel/azel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    InspectElementComponent,
    OurDevicesComponent,
    AboutComponent,
    FooterComponent,
    TestComponent,
    WaterLeaksComponent,
    AboutComponent,
    AzelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    CarouselModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
