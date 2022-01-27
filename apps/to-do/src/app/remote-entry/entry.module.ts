import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { UtilityModule } from '@first-monorepo/utility';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    HttpClientModule,
    UtilityModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  exports: [RemoteEntryComponent],
  providers: [],
})
export class RemoteEntryModule {}
