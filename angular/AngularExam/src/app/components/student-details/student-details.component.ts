import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  currentStudent: Student = {
    lName: '',
    fName: '',
    mName: '',
    subject: ''
  };
  message = '';

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getStudent(this.route.snapshot.params['id'])
  }

  getStudent(id: string) : void{
    this.studentService.get(id).subscribe(
      data =>{
        this.currentStudent = data;
        console.log(data);
      },
      error => {
        console.log(error)
      }
    )
  }

  updateStudent(): void{
    this.studentService.update(this.currentStudent.id,this.currentStudent).subscribe(
      response => {
        console.log(response);
        this.message = response.message;
      },
      error => {
        console.log(error)
      }
    )
  }

  deleteStudent(): void{
    this.studentService.delete(this.currentStudent.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/students']);
      },
      error => {
        console.log(error)
      }
    )
  }
}
