import { Component } from '@angular/core'
import { UserDetails } from '../models/UserDetails'
import { DisplayService } from '../services/display.service'
import { ExportPdfExcelService } from '../services/export-pdf-excel.service'

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css'],
})
export class DisplayPageComponent {
  POSTS: any
  page: number = 1
  count: number = 0
  tableSize: number = 10
  tableSizes: any = [3, 6, 9, 12]
  users: UserDetails[] = []
  userExcel: any = []
  pdfAppend: any = []
  fileName = 'UserDetails.xlsx'
  index = 1
  fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  fileExtension = '.xlsx'
  user: UserDetails = {
    userId: '',
    userName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    dateOfBirth: '',
  }
  constructor(
    private getUsers: DisplayService,
    private exportPdfExcel: ExportPdfExcelService,
  ) {}
  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers() {
    this.users = []
    this.userExcel = []
    this.pdfAppend = []
    console.log(this.users)
    this.getUsers.getAllUsers().subscribe((response) => {
      console.log(response)
      this.users = response

      for (let i = 0; i <= this.users.length; i++) {
        this.userExcel.push({
          userName: this.users[i].userName,
          DateOfBirth: this.users[i].dateOfBirth,
          gender: this.users[i].gender,
          email: this.users[i].email,
          phoneNumber: this.users[i].phoneNumber,
        })
        this.pdfAppend.push([
          this.users[i].userName,
          this.users[i].dateOfBirth,
          this.users[i].gender,
          this.users[i].email,
          this.users[i].phoneNumber,
        ])
      }
    })
  }

  exportexcel(): void {
    this.exportPdfExcel.exportExcel(this.userExcel, 'UserDetails')
  }
  openPDFinit() {
    this.exportPdfExcel.openPDF(this.pdfAppend)
  }

  onTableDataChange(event: any) {
    this.page = event
    this.getAllUsers()
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value
    this.page = 1
    this.getAllUsers()
  }
}
