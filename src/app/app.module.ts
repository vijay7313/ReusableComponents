import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplayPageComponent } from './display-page/display-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ExcelFileUploadComponent } from './excel-file-upload/excel-file-upload.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonTableComponent } from './json-table/json-table.component';
@NgModule({
  declarations: [
    AppComponent,
    DisplayPageComponent,
    ExcelFileUploadComponent,
    JsonTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatTableExporterModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
