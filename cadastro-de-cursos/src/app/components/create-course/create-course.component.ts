import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
  
  formSubmitted = false;
  cursos = [];

  constructor(private route: Router) {}

  ngOnInit(): void {}
  
  onSubmit(form) {
    this.cursos = JSON.parse(localStorage.getItem('curso'));

    if (!this.cursos) {
      localStorage.setItem('curso', JSON.stringify([...this.cursos, form.value]));
    } else {
      const newData = [...this.cursos, form.value];
      localStorage.setItem('curso', JSON.stringify(newData));
    }
    this.formSubmitted = true;
    setTimeout(() => {
      this.route.navigate(['/']);
    }, 2000);
  }

  // validate form fields and add error classes
  validate(field) {
    return !field.valid && field.touched;
  }
  fieldErrorStyle(field) {
    return {
      'label-error': this.validate(field),
    };
  }
}
