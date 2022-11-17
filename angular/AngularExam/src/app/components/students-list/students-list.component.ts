import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students?: Student[];
  currentStudent?: Student;
  currentIndex = -1;
  lName = '';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {  
    this.retieveStudents();
  }

  retieveStudents(): void{
    this.studentService.getAll().subscribe(
      data => {
        this.students = data;
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    );
  }

  refreshList(): void{
    this.retieveStudents();
    this.currentStudent = undefined;
    this.currentIndex = -1
  }

  setActiveStudent(student: Student,index: number):void{
    this.currentStudent = student;
    this.currentIndex = index
  }

  removeAllStudents(): void{
    this.studentService.deleteAll().subscribe(
      response=>{
        console.log(response)
        this.refreshList();
      },
      error => {console.log(error)}
    )
  }

}
