import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomePageComponent} from '../pages/home-page/home-page.component';
import {NavigationBarComponent} from '../shared/navigation-bar/navigation-bar.component';
import {PageNotFoundComponent} from '../pages/page-not-found/page-not-found.component';
import {FooterComponent} from '../shared/footer/footer.component';
import {ExperienceComponent} from '../pages/experience/experience.component';
import {ProjectComponent} from '../pages/project/project.component';
import {HeaderComponent} from '../shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatMenu} from '@angular/material';
import { PanelRowComponent } from '../shared/panel-row/panel-row.component';
import { OrderDatePipe } from '../pipes/order-date.pipe';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'experiences/:company', component: ExperienceComponent},
  { path: 'experiences', component: ExperienceComponent},
  { path: 'projects/:project', component: ProjectComponent},
  { path: 'projects', component: ProjectComponent},
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationBarComponent,
    PageNotFoundComponent,
    FooterComponent,
    ExperienceComponent,
    ProjectComponent,
    HeaderComponent,
    PanelRowComponent,
    OrderDatePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
