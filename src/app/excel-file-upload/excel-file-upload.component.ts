import { Component } from '@angular/core'
import { UploadExcelService } from '../services/upload-excel.service';
import { ReturnResult } from '../models/ReturnResult';
@Component({
  selector: 'app-excel-file-upload',
  templateUrl: './excel-file-upload.component.html',
  styleUrls: ['./excel-file-upload.component.css'],
})
export class ExcelFileUploadComponent {
  constructor(private uploadExcelService: UploadExcelService) {}
  loginForm: any;
  submitDisabled: boolean = false;
  successDisabled: boolean = false;
  failDisabled: boolean = false;
  result: ReturnResult={ result: '' };


  file: any
  validation(event: any) {
    this.file = event.target.files[0];
    this.submitDisabled = false;
  }
  refresh(): void {
    window.location.reload();
}
   uploadExcel() {
     if (!this.file) {
      this.submitDisabled = true;
      setTimeout(() => {
        this.submitDisabled = false;
      }, 3000); 
       
    }
     else {
       try {
        let formData = new FormData()
        formData.append('file', this.file)
         this.uploadExcelService.uploadExcel(formData).subscribe((response) => {
           console.log(response)
           if (response == "1")
           {
             this.successDisabled = true;
             setTimeout(() => {
               this.successDisabled = false;
               this.refresh();
            }, 3000); 
           }
           if (response == "0")
           {
             this.failDisabled = true;
             setTimeout(() => {
               this.failDisabled = false;
               this.refresh();
            }, 3000); 
             }
          
        })
       }
       catch (error){
         console.log(error)
       }
      
      }
   
  }
}
