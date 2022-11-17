import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student = {
    lName: '',
    fName: '',
    mName: '',
    subject: ''
  };
  submitted = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  saveStudent(): void{
    const data = {
      lName: this.student.lName,
      fName: this.student.fName,
      mName: this.student.mName,
      subject: this.student.subject
    };
    this.studentService.create(data).subscribe(
      response =>{
        console.log(response)
      },
      error=>{
        console.log(error);
      }
    )
  }

  newStudent():void{
    this.student = {
      lName: '',
      fName: '',
      mName: '',
      subject: ''
    }
  }

}
