import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormEventComponent } from './observable/form-event/form-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'form-event', component: FormEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'toarray', component: ToArrayComponent },
    ],
  },
  { path: '', redirectTo: 'promise', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
