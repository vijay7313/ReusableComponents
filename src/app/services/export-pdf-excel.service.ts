import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as FileSaver from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ExportPdfExcelService {
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';
  constructor() { }

  public exportExcel(jsonData: any[], fileName: string): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, fileName);
  }
  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: this.fileType});
    FileSaver.saveAs(data, fileName + this.fileExtension);
  }


  public openPDF(pdfAppend:any): void {
    const doc = new jsPDF()
    var col: any[][] = [];
    let rows: any[] = [];  
 
let nodes = document.querySelectorAll('th');
        let headers: string[] = [];
    nodes.forEach((node) => {
      headers.push(node.innerHTML);
    })
    
       col.push(headers)
     
        pdfAppend.forEach((element: any) => {      
          var temp = element;
        rows.push(temp);
        });   
          
autoTable(doc, {
  head: col,
  body:pdfAppend
});
    
doc.save('userDetails.pdf')
  } 
}
