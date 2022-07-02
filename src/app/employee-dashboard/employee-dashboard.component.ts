import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../register/api.service';
import { EmployeeModel } from './employee-dashboard.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue !: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

ngOnInit(): void {
  this.formValue = this.formbuilder.group({
    title: [''],
    name: [''],
    username: [''],
    email: [''],
    password: [''],
    gender: ['']
  })
}
    postEmployeeDetails() {
    this.employeeModelObj.title = this.formValue.value.title;
    this.employeeModelObj.name = this.formValue.value.name;
    this.employeeModelObj.username = this.formValue.value.username;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.password = this.formValue.value.password;
    this.employeeModelObj.gender = this.formValue.value.gender;

    this.api.postEmploye(this.employeeModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Employee added successfully")
        this.formValue.reset();
      },
      err=>{
        alert("something went wrong");
      })
    }
  }