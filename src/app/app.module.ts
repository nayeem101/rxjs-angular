import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { FormEventComponent } from './observable/form-event/form-event.component';
import { ListComponent } from './observable/list/list.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    NotFoundComponent,
    FormEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
