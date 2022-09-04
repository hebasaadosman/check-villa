import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AzelComponent } from './azel/azel.component';
import { HomeComponent } from './home/home.component';
import { InspectElementComponent } from './inspect-element/inspect-element.component';
import { OurDevicesComponent } from './our-devices/our-devices.component';
import { TestComponent } from './test/test.component';
import { WaterLeaksComponent } from './water-leaks/water-leaks.component';

const routes: Routes = [
  { path: 'about', component:AboutComponent },
  { path: 'azel', component:AzelComponent },
  
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'elems', component: InspectElementComponent },
      { path: 'devices', component: OurDevicesComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  {
    path: 'water-leaks',
    component: WaterLeaksComponent,
    children: [{ path: 'test', component: TestComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
