import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import-guard';

/* Components */
import { ApiService, AuthService, EmployeeService, JwtService, TimeSheetsService } from './services';


@NgModule({
  imports: [ CommonModule, SharedModule],
  providers: [
    ApiService, 
    EmployeeService, 
    TimeSheetsService,
    JwtService,
    AuthService,
  ],
  declarations: [],
  exports: []
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
