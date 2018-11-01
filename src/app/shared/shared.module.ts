import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogConfig } from '@angular/material';

import { MaterialComponentsModule } from './material-components.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialComponentsModule,
  ],
  providers: [MatDialogConfig],
  entryComponents: [WarningDialogComponent],
  declarations: [ToolbarComponent, WarningDialogComponent, PageNotFoundComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialComponentsModule,
    ToolbarComponent,
    WarningDialogComponent,
  ]
})
export class SharedModule { }
