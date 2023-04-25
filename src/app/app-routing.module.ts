import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayPageComponent } from './display-page/display-page.component';
import { ExcelFileUploadComponent } from './excel-file-upload/excel-file-upload.component';
import { JsonTableComponent } from './json-table/json-table.component';

const routes: Routes = [

  {
    path:'display',component:DisplayPageComponent
  },
  {
    path:'excelFileUpload',component:ExcelFileUploadComponent
  },
  {
    path:'jsonTable',component:JsonTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
