import { Component } from '@angular/core';
import { UserDetails } from '../models/UserDetails';
import { JsonService } from '../services/json.service';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.css']
})
export class JsonTableComponent {
  users: UserDetails[] = [];
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private json: JsonService) { }
  ngOnInit(): void {
    this.getJsonData();
  }
  getJsonData() {
    this.json.getDataFromJson().subscribe(res => {
      this.users = res;
    })
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getJsonData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value
    this.page = 1
    this.getJsonData();
  }
}
