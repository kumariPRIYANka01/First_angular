import { Component, OnInit,ViewChild } from '@angular/core';
import { studentinfo } from 'src/studentinfo';
import { StudentService } from '../student.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  ELEMENT_DATA: studentinfo[] = [];
  displayedColumns:string[]=['registrationNumber','fullname','gender','category','mobileNumber','_id','transportationFeeCode','feeAmount'];
  datasource=new MatTableDataSource<studentinfo>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.datasource.paginator = this.paginator;
    this.datasource.sort=this.sort;
    this.gatAllreports();
  }
  public gatAllreports(){
    let response=this.service.studentdata();
    response.subscribe(report=>this.datasource.data=report as studentinfo[])
  }
  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue.trim().toLowerCase();
}
}
